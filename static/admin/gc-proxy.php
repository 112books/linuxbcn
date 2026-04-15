<?php
define('GC_TOKEN', 'NVLNYV5JIVPOIHZHE57TVCDBPV7UPKFL');
define('GC_BASE',  'https://linuxbcn.goatcounter.com/api/v0');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$path   = isset($_GET['path']) ? '/' . ltrim($_GET['path'], '/') : '/';
$params = $_GET;
unset($params['path']);

$url = GC_BASE . $path;
if ($params) $url .= '?' . http_build_query($params);

$ctx = stream_context_create(['http' => [
  'header'  => "Authorization: Bearer " . GC_TOKEN . "\r\nAccept: application/json\r\n",
  'timeout' => 10,
]]);

$body = @file_get_contents($url, false, $ctx);

if ($body === false) {
  http_response_code(502);
  echo json_encode(['error' => 'No s\'ha pogut connectar amb GoatCounter']);
  exit;
}

preg_match('/HTTP\/\d\.\d (\d+)/', $http_response_header[0], $m);
http_response_code((int)($m[1] ?? 200));
echo $body;
