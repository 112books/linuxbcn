<?php
/**
 * Proxy first-party de GoatCounter.
 *
 * /js/m.js (còpia de count.js) envia cada visita aquí en lloc de
 * *.goatcounter.com, que els adblockers bloquegen. Aquest script la reenvia
 * a l'API autenticada /api/v0/count amb la IP i el User-Agent reals del
 * visitant, perquè GoatCounter calculi bé sessions, ubicació i bots.
 *
 * No es desa cap IP ni log en aquest servidor.
 *
 * Secrets: fora del web root i fora del repo, a ~/.linuxbcn-secrets.php
 * (www/v/ → ../../.linuxbcn-secrets.php). Contingut:
 *   <?php
 *   define('GC_TOKEN', '<token API GoatCounter amb permís "Record pageviews">');
 *   define('DIAG_PASS', '<contrasenya per a ?diag>');
 *
 * Diagnosi (comprovar quina IP es detecta darrere el proxy de Dinahosting):
 *   GET /v/index.php?diag=<DIAG_PASS>
 */

$secrets = dirname(__DIR__, 2) . '/.linuxbcn-secrets.php';
if (is_readable($secrets)) require $secrets;

define('GC_API',    'https://linuxbcn.goatcounter.com/api/v0/count');
define('SITE_HOST', 'linuxbcn.com');

function is_public_ip(string $ip): bool {
    return (bool)filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE);
}

// Dinahosting termina SSL en un proxy: la IP real pot arribar per header.
// Ordre: X-Real-IP → darrera IP pública de X-Forwarded-For (la que afegeix
// el proxy més proper) → REMOTE_ADDR.
function client_ip(): string {
    $real = trim($_SERVER['HTTP_X_REAL_IP'] ?? '');
    if (is_public_ip($real)) return $real;

    $xff = array_reverse(array_map('trim', explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '')));
    foreach ($xff as $ip) {
        if (is_public_ip($ip)) return $ip;
    }
    return $_SERVER['REMOTE_ADDR'] ?? '';
}

if (isset($_GET['diag'])) {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    if (!defined('DIAG_PASS') || !hash_equals(DIAG_PASS, (string)$_GET['diag'])) {
        http_response_code(403);
        echo json_encode(['error' => 'Accés denegat']);
        exit;
    }
    // &test=1 → envia un esdeveniment "diag-proxy" (no compta com a visita) i mostra la resposta
    $test = null;
    if (isset($_GET['test']) && defined('GC_TOKEN') && function_exists('curl_init')) {
        $ch = curl_init(GC_API);
        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => json_encode(['hits' => [[
                'path' => 'diag-proxy', 'title' => 'Prova del proxy', 'event' => true,
                'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? '', 'ip' => client_ip(),
            ]]]),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HEADER         => true,
            CURLOPT_TIMEOUT        => 10,
            CURLOPT_HTTPHEADER     => ['Authorization: Bearer ' . GC_TOKEN, 'Content-Type: application/json'],
        ]);
        $resp = curl_exec($ch);
        $hsize = (int)curl_getinfo($ch, CURLINFO_HEADER_SIZE);
        $test = [
            'http'   => (int)curl_getinfo($ch, CURLINFO_HTTP_CODE),
            'filter' => preg_match('/^X-Goatcounter-Filter:\s*(.*)$/mi', (string)substr((string)$resp, 0, $hsize), $m) ? trim($m[1]) : null,
            'body'   => substr((string)substr((string)$resp, $hsize), 0, 500),
            'error'  => curl_error($ch) ?: null,
        ];
    }
    echo json_encode([
        'test_goatcounter'=> $test,
        'remote_addr'     => $_SERVER['REMOTE_ADDR'] ?? null,
        'x_real_ip'       => $_SERVER['HTTP_X_REAL_IP'] ?? null,
        'x_forwarded_for' => $_SERVER['HTTP_X_FORWARDED_FOR'] ?? null,
        'ip_escollida'    => client_ip(),
        'curl'            => function_exists('curl_init'),
        'token_carregat'  => defined('GC_TOKEN'),
    ], JSON_PRETTY_PRINT);
    exit;
}

// Resposta immediata (GIF 1×1): el visitant no espera GoatCounter.
function respond_and_close(): void {
    header('Content-Type: image/gif');
    header('Cache-Control: no-store, max-age=0');
    echo base64_decode('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
    if (function_exists('fastcgi_finish_request')) fastcgi_finish_request();
}

$path = (string)($_GET['p'] ?? '');

// Només visites vàlides i originades a linuxbcn.com
$ref_host = parse_url($_SERVER['HTTP_REFERER'] ?? '', PHP_URL_HOST);
if ($path === '' || strlen($path) > 2048 || ($ref_host && $ref_host !== SITE_HOST && $ref_host !== 'www.' . SITE_HOST)) {
    respond_and_close();
    exit;
}

$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
$lang = '';
if (!empty($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
    $lang = substr(trim(explode(';', explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE'])[0])[0]), 0, 35);
}

$hit = [
    'path'       => $path,
    'title'      => substr((string)($_GET['t'] ?? ''), 0, 500),
    'ref'        => substr((string)($_GET['r'] ?? ''), 0, 2048),
    'query'      => substr((string)($_GET['q'] ?? ''), 0, 2048),
    'event'      => ($_GET['e'] ?? '') === 'true',
    'size'       => (string)(int)($_GET['s'] ?? 0),
    'bot'        => (int)($_GET['b'] ?? 0),
    'user_agent' => $ua,
    'ip'         => client_ip(),
];
if ($lang !== '') $hit['language'] = $lang;

respond_and_close();

if (!defined('GC_TOKEN') || !function_exists('curl_init') || $ua === '') exit;

$ch = curl_init(GC_API);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode(['hits' => [$hit]], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 5,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . GC_TOKEN,
        'Content-Type: application/json',
    ],
]);
curl_exec($ch);
