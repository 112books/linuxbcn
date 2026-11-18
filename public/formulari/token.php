<?php
/**
 * Emet el testimoni anti-spam del formulari de contacte.
 *
 * GET /formulari/token.php -> {"t": <unix>, "s": "<hmac>"}
 *
 * contacte.js el demana en carregar la pagina i el posa als camps ocults
 * form_ts / form_sig. enviar.php el torna a validar. Sense aquest testimoni
 * (o amb un d'invalid) el formulari descarta l'enviament en silenci, de manera
 * que els bots que fan POST directe no reben cap pista.
 *
 * El secret es llegeix de ~/.linuxbcn-secrets.php (FORM_SECRET) o s'autogenera
 * a la carpeta temporal, mai dins del repo ni del web root.
 */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

require_once __DIR__ . '/_comu.php';

$t = time();
$secret = form_secret();
$sig = $secret !== '' ? hash_hmac('sha256', (string)$t, $secret) : '';

echo json_encode(array('t' => $t, 's' => $sig), JSON_UNESCAPED_UNICODE);
