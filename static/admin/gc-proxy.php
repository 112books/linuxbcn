<?php
define('GC_TOKEN', '1lo7hszjcgc71hw45idc5dg1qb4i9wpdcp182xo2lhy50x1xj');
define('GC_BASE',  'https://linuxbcn.goatcounter.com/api/v0');

header('Content-Type: application/json');

$path   = isset($_GET['path']) ? '/' . ltrim($_GET['path'], '/') : '/';
$params = $_GET;
unset($params['path']);

$url = GC_BASE . $path;
if ($params) $url .= '?' . http_build_query($params);

$ch = curl_init($url);
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT        => 10,
  CURLOPT_HTTPHEADER     => [
    'Authorization: Bearer ' . GC_TOKEN,
    'Accept: application/json',
  ],
]);

$body   = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err    = curl_error($ch);
curl_close($ch);

if ($body === false || $err) {
  http_response_code(502);
  echo json_encode(['error' => 'cURL: ' . $err]);
  exit;
}

http_response_code($status);
echo $body;
