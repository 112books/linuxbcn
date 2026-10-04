<?php
/**
 * Funcions compartides del formulari de contacte.
 *
 * Nomes s'ha d'incloure des d'enviar.php i token.php. No exposa res si
 * s'obre directament pel navegador.
 */

if (basename(isset($_SERVER['SCRIPT_FILENAME']) ? $_SERVER['SCRIPT_FILENAME'] : '') === basename(__FILE__)) {
    http_response_code(404);
    exit;
}

/**
 * IP real del visitant darrere el proxy SSL de Dinahosting.
 * Ordre: X-Real-IP -> darrera IP publica de X-Forwarded-For -> REMOTE_ADDR.
 */
function client_ip() {
    $real = trim(isset($_SERVER['HTTP_X_REAL_IP']) ? $_SERVER['HTTP_X_REAL_IP'] : '');
    if (filter_var($real, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) return $real;
    $xff = array_reverse(array_map('trim', explode(',', isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : '')));
    foreach ($xff as $ip) {
        if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) return $ip;
    }
    return isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';
}

/**
 * Secret HMAC per signar el testimoni del formulari.
 *
 * Prioritat: FORM_SECRET de ~/.linuxbcn-secrets.php (fora del repo). Si no hi es,
 * n'autogenera un a la carpeta temporal privada, tambe fora del web root.
 * Retorna '' si no s'ha pogut crear (aleshores nomes es valida l'antiguitat).
 */
function form_secret() {
    static $cached = null;
    if ($cached !== null) return $cached;

    $secrets = dirname(__DIR__, 2) . '/.linuxbcn-secrets.php';
    if (is_readable($secrets)) {
        require_once $secrets;
        if (defined('FORM_SECRET') && is_string(FORM_SECRET) && FORM_SECRET !== '') {
            return $cached = FORM_SECRET;
        }
    }

    $dir = sys_get_temp_dir() . '/lbcn-form';
    if (!is_dir($dir)) @mkdir($dir, 0700, true);
    if (!is_dir($dir)) return $cached = '';

    $file = $dir . '/secret';
    $s = @file_get_contents($file);
    if (is_string($s) && strlen(trim($s)) >= 32) return $cached = trim($s);

    try { $new = bin2hex(random_bytes(32)); } catch (Exception $e) { return $cached = ''; }

    // Creacio atomica: si un altre proces s'ha avancat, s'usa el seu secret.
    $fh = @fopen($file, 'x');
    if ($fh) {
        @fwrite($fh, $new);
        @fclose($fh);
        @chmod($file, 0600);
        return $cached = $new;
    }
    $s = @file_get_contents($file);
    return $cached = (is_string($s) && strlen(trim($s)) >= 32) ? trim($s) : $new;
}

/**
 * Valida el testimoni signat que el JS posa als camps form_ts/form_sig.
 * Requereix una antiguitat minima (3 s: cap huma envia el formulari tan de
 * pressa) i maxima (12 h: evita reutilitzar un testimoni vell).
 */
function valid_form_token($t, $sig) {
    $t = (int)$t;
    if ($t <= 0) return false;
    $age = time() - $t;
    if ($age < 3 || $age > 43200) return false;
    $secret = form_secret();
    if ($secret === '') return true; // degradacio graciosa: nomes comprovem l'edat
    return is_string($sig) && $sig !== ''
        && hash_equals(hash_hmac('sha256', (string)$t, $secret), $sig);
}

/**
 * Puntuacio heuristica de spam. Llindar de descart: >= 5.
 * Els enllacos son el senyal mes fort en un formulari d'introduccio.
 */
function spam_score($missatge) {
    $score = 0;
    $urls = preg_match_all('~(?:https?://|www\.)[^\s<>"\']+~iu', $missatge);
    if ($urls >= 1) $score += 4;
    // Nota: enllacos legitims solen ser 1 o 2; per aixo no sumem per nombre.
    if (preg_match('~(?:https?://|www\.)(?:tinyurl\.com|bit\.ly|t\.co|goo\.gl|ow\.ly|is\.gd|buff\.ly|cutt\.ly|rebrand\.ly|shorturl\.at|rb\.gy|surl\.li|clck\.ru|vk\.cc)~iu', $missatge)) $score += 3;
    if (preg_match('/\p{Cyrillic}/u', $missatge)) $score += 2;
    return $score;
}
