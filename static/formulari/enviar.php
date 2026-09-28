<?php
/**
 * Gestor del formulari de contacte de linuxbcn.com.
 * Autocontingut: valida i envia per correu. No desa PII ni registra IPs.
 * Endpoint: POST /formulari/enviar.php
 */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function out($code, $data) {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if ((isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '') !== 'POST') {
    out(405, array('error' => 'Metode no permes'));
}

// Nomes POST originats a linuxbcn.com
$ref = parse_url(isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '', PHP_URL_HOST);
if ($ref && $ref !== 'linuxbcn.com' && $ref !== 'www.linuxbcn.com') {
    out(403, array('error' => 'Origen no permes'));
}

// Honeypot: si ve ple, descartem en silenci
if (trim((string)(isset($_POST['botcheck']) ? $_POST['botcheck'] : '')) !== '') {
    out(200, array('ok' => true));
}

$nom      = trim((string)(isset($_POST['nom']) ? $_POST['nom'] : ''));
$email    = trim((string)(isset($_POST['email']) ? $_POST['email'] : ''));
$tipus    = trim((string)(isset($_POST['tipus']) ? $_POST['tipus'] : ''));
$missatge = trim((string)(isset($_POST['missatge']) ? $_POST['missatge'] : ''));
$rgpd     = !empty($_POST['rgpd']);
$interes  = isset($_POST['interes']) ? $_POST['interes'] : array();
if (!is_array($interes)) $interes = array();

// Evita injeccio de capcaleres
$email = str_replace(array("\r", "\n"), '', $email);
$nom   = str_replace(array("\r", "\n"), ' ', $nom);

if ($nom === '' || $missatge === '' || !$rgpd || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    out(422, array('error' => 'Falten dades o no son valides'));
}
if (strlen($nom) > 200 || strlen($email) > 200 || strlen($missatge) > 5000) {
    out(413, array('error' => 'El contingut es massa llarg'));
}

$interes_net = array();
foreach ($interes as $i) {
    $i = trim((string)$i);
    if ($i !== '' && strlen($i) <= 200) $interes_net[] = $i;
}

$to      = 'hola@linuxbcn.com';
$subject = 'Nova consulta - LinuxBCN';
$cos  = "Nom: {$nom}\n";
$cos .= "Correu: {$email}\n";
if ($tipus !== '') $cos .= "Tipus: {$tipus}\n";
if ($interes_net) $cos .= "Interessos: " . implode(', ', $interes_net) . "\n";
$cos .= "\nMissatge:\n{$missatge}\n";
$cos .= "\n---\nEnviat des del formulari de linuxbcn.com\n";

$headers  = "From: Web LinuxBCN <no-reply@linuxbcn.com>\r\n";
$headers .= "Reply-To: {$nom} <{$email}>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

if (!mail($to, $subject, $cos, $headers)) {
    out(500, array('error' => "No s'ha pogut enviar el missatge"));
}
out(200, array('ok' => true));
