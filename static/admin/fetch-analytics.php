<?php
/**
 * Genera analytics-cache.json a partir de la API de GoatCounter.
 * Lògica portada de fetch_goatcounter_analytics.py (goatcounter-dashboard).
 *
 * Ús: GET /admin/fetch-analytics.php?token=<PASSWORD>
 *     → escriu analytics-cache.json al mateix directori
 *     → retorna JSON {status, total, generated} o {error}
 */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
set_time_limit(90);

$token = trim($_GET['token'] ?? '');
if ($token !== 'LinuxBCN2026') {
    http_response_code(403);
    echo json_encode(['error' => 'Accés denegat']);
    exit;
}

if (!function_exists('curl_init')) {
    http_response_code(500);
    echo json_encode(['error' => 'cURL no disponible al servidor']);
    exit;
}

define('GC_TOKEN', '1lo7hszjcgc71hw45idc5dg1qb4i9wpdcp182xo2lhy50x1xj');
define('GC_BASE',   'https://linuxbcn.goatcounter.com/api/v0');
define('CACHE_FILE', __DIR__ . '/analytics-cache.json');

// ── gc_fetch: retorna array de dades o ['__error' => $codi] ──────────────────

function gc_fetch(string $path, array $params = []): array {
    $url = GC_BASE . $path;
    if ($params) $url .= '?' . http_build_query($params);
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT        => 25,
        CURLOPT_HTTPHEADER     => [
            'Authorization: Bearer ' . GC_TOKEN,
            'Accept: application/json',
        ],
    ]);
    $body   = curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $err    = curl_error($ch);
    curl_close($ch);
    if ($body === false || $err) return ['__error' => 0, '__msg' => 'Error de xarxa: ' . $err];
    if ($status >= 400)         return ['__error' => $status];
    $decoded = json_decode($body, true);
    return is_array($decoded) ? $decoded : ['__error' => $status, '__msg' => 'Resposta invàlida'];
}

// ── _norm_stats: equivalent de Python _norm_stats ────────────────────────────
// Llegeix directament {name, id, count} de cada element — sense fallbacks

function norm_stats(array $items): array {
    $out = [];
    foreach ($items as $item) {
        $name  = $item['name'] ?? $item['id'] ?? 'Desconegut';
        $count = (int)($item['count'] ?? 0);
        if ($count > 0) {
            $out[] = ['name' => $name, 'id' => $item['id'] ?? $name, 'count' => $count];
        }
    }
    usort($out, fn($a, $b) => $b['count'] - $a['count']);
    return $out;
}

// ── extract_lang i extract_section ───────────────────────────────────────────

function extract_lang(string $path): string {
    $langs = ['ca', 'en', 'es'];
    $parts = array_values(array_filter(explode('/', $path)));
    foreach ($parts as $p) {
        if (in_array($p, $langs, true)) return $p;
    }
    return 'ca';
}

function extract_section(string $path): string {
    $langs = ['ca', 'en', 'es', 'fr', 'de', 'it', 'pt'];
    $parts = array_values(array_filter(explode('/', $path)));
    if (!$parts) return 'inici';
    $idx = in_array($parts[0], $langs, true) ? 1 : 0;
    return $parts[$idx] ?? 'inici';
}

// ── Paràmetres de cerca ───────────────────────────────────────────────────────

$end   = date('Y-m-d', strtotime('-1 day'));
$start = date('Y-m-d', strtotime('-365 days'));
$params = ['start' => $start, 'end' => $end, 'limit' => 50];

// ── Crida principal: hits per pàgina ─────────────────────────────────────────

$hits_raw = gc_fetch('/stats/hits', $params);
usleep(400000);

if (isset($hits_raw['__error'])) {
    $code = (int)$hits_raw['__error'];
    if ($code === 429) {
        $msg = 'GoatCounter ha limitat les crides (429). Espera 1-2 minuts i torna a prémer Actualitzar.';
    } elseif ($code === 401 || $code === 403) {
        $msg = 'Token de GoatCounter invàlid o caducat (' . $code . '). Regenera\'l a goatcounter.com/settings/api i actualitza\'l a fetch-analytics.php línia 14.';
    } elseif ($code >= 500) {
        $msg = 'GoatCounter té una incidència als seus servidors (' . $code . '). No és un problema del teu token. Torna-ho a provar en uns minuts.';
    } else {
        $msg = $hits_raw['__msg'] ?? 'Error de connexió (HTTP ' . $code . '). Torna-ho a provar.';
    }
    http_response_code(502);
    echo json_encode(['error' => $msg, 'http_status' => $code]);
    exit;
}

// ── Processa hits (lògica equivalent al Python) ───────────────────────────────

$hits_by_day = [];
$by_section  = [];
$by_lang     = [];
$hits_pages  = [];
$total       = 0;

foreach (($hits_raw['hits'] ?? []) as $path_item) {
    $path = (string)($path_item['path'] ?? '');
    if (str_starts_with($path, '/admin') || str_ends_with($path, '.php')) continue;

    $section    = extract_section($path);
    $lang       = extract_lang($path);
    $path_total = 0;

    foreach (($path_item['stats'] ?? []) as $stat) {
        $date  = substr((string)($stat['day'] ?? ''), 0, 10);
        $count = (int)($stat['daily'] ?? 0);
        if (!$count) continue;
        $total                += $count;
        $path_total           += $count;
        $by_section[$section]  = ($by_section[$section] ?? 0) + $count;
        $by_lang[$lang]        = ($by_lang[$lang] ?? 0) + $count;
        if (strlen($date) === 10) {
            $hits_by_day[$date] = ($hits_by_day[$date] ?? 0) + $count;
        }
    }

    if ($path_total > 0) {
        $hits_pages[$path] = ($hits_pages[$path] ?? 0) + $path_total;
    }
}

ksort($hits_by_day);
arsort($by_section);
arsort($hits_pages);

$hbd_arr   = array_map(fn($d, $c) => ['date' => $d, 'count' => $c], array_keys($hits_by_day), array_values($hits_by_day));
$hits_list = [];
foreach (array_slice($hits_pages, 0, 30, true) as $path => $count) {
    $hits_list[] = ['path' => $path, 'count' => $count];
}

// ── Crides secundàries (fallen en silenci, com al Python safe_fetch_stats) ───

function safe_stats(string $endpoint, array $params): array {
    usleep(400000);
    $raw = gc_fetch($endpoint, $params);
    if (isset($raw['__error'])) return [];
    return norm_stats($raw['stats'] ?? []);
}

$refs_list = [];
usleep(400000);
$refs_raw = gc_fetch('/stats/toprefs', array_merge($params, ['limit' => 20]));
if (!isset($refs_raw['__error'])) {
    foreach (($refs_raw['stats'] ?? []) as $ref) {
        $count = (int)($ref['count'] ?? 0);
        if ($count > 0) $refs_list[] = ['name' => $ref['name'] ?? $ref['id'] ?? '(directe)', 'count' => $count, 'id' => $ref['id'] ?? ''];
    }
}

$browsers  = safe_stats('/stats/browsers',  array_merge($params, ['limit' => 10]));
$systems   = safe_stats('/stats/systems',   array_merge($params, ['limit' => 10]));
$sizes     = safe_stats('/stats/sizes',     array_merge($params, ['limit' => 10]));
$locations = safe_stats('/stats/locations', array_merge($params, ['limit' => 20]));

// ── Escriu cache ──────────────────────────────────────────────────────────────

$output = [
    'generated'   => gmdate('Y-m-d\TH:i:s\Z'),
    'period'      => ['start' => $start, 'end' => $end],
    'total'       => $total,
    'total_unique'=> 0,
    'hits_by_day' => $hbd_arr,
    'hits'        => $hits_list,
    'by_lang'     => $by_lang,
    'by_section'  => $by_section,
    'refs'        => $refs_list,
    'browsers'    => $browsers,
    'systems'     => $systems,
    'sizes'       => $sizes,
    'locations'   => $locations,
];

$json = json_encode($output, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

if (file_put_contents(CACHE_FILE, $json) === false) {
    http_response_code(500);
    echo json_encode(['error' => 'No s\'ha pogut escriure analytics-cache.json. Comprova els permisos del directori /admin/.']);
    exit;
}

echo json_encode([
    'status'    => 'ok',
    'total'     => $total,
    'generated' => $output['generated'],
    'period'    => $output['period'],
]);
