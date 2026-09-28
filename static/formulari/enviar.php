<?php
/**
 * Gestor del formulari de contacte de linuxbcn.com.
 * Valida i envia un correu HTML (amb alternativa de text pla). No desa PII ni IPs.
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

$ref = parse_url(isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '', PHP_URL_HOST);
if ($ref && $ref !== 'linuxbcn.com' && $ref !== 'www.linuxbcn.com') {
    out(403, array('error' => 'Origen no permes'));
}

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

$esc = function($v) { return htmlspecialchars((string)$v, ENT_QUOTES, 'UTF-8'); };

$to      = 'hola@linuxbcn.com';
$subject = 'Nova consulta - LinuxBCN';

// --- alternativa en text pla ---
$text  = "Nova consulta des del web\n\n";
$text .= "Nom: $nom\n";
$text .= "Correu: $email\n";
if ($tipus !== '') $text .= "Tipus: $tipus\n";
if ($interes_net) $text .= "Interessos: " . implode(', ', $interes_net) . "\n";
$text .= "\nMissatge:\n$missatge\n";

// --- cos HTML ---
$fila = function($label, $valor) use ($esc) {
    return '<tr>'
        . '<td style="padding:9px 12px 9px 0;border-bottom:1px solid #ddddd8;color:#6f6f6a;font-size:13px;white-space:nowrap;vertical-align:top;">' . $esc($label) . '</td>'
        . '<td style="padding:9px 0;border-bottom:1px solid #ddddd8;color:#111110;font-size:14px;">' . $esc($valor) . '</td>'
        . '</tr>';
};

$rows  = $fila('Nom', $nom);
$rows .= $fila('Correu', $email);
if ($tipus !== '') $rows .= $fila('Tipus', $tipus);
if ($interes_net) $rows .= $fila('Interessos', implode(', ', $interes_net));

$logo  = '<span style="font-family:Helvetica,Arial,sans-serif;font-size:22px;font-weight:700;letter-spacing:-0.6px;color:#111110;">Linux<span style="color:#d4600a;">BCN</span></span>';
$tag   = '<div style="font-family:Menlo,Consolas,monospace;font-size:11px;color:#6f6f6a;margin-top:5px;">Solucions digitals a mida</div>';

$html  = '<!DOCTYPE html><html lang="ca"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>';
$html .= '<body style="margin:0;padding:0;background:#fdf6ef;">';
$html .= '<div style="max-width:600px;margin:0 auto;padding:24px 20px;font-family:Helvetica,Arial,sans-serif;">';
$html .= '<div style="border-top:4px solid #d4600a;padding:18px 0 10px;">' . $logo . $tag . '</div>';
$html .= '<h1 style="font-family:Helvetica,Arial,sans-serif;font-size:18px;font-weight:700;color:#111110;margin:18px 0 6px;">Nova consulta des del web</h1>';
$html .= '<table role="presentation" style="width:100%;border-collapse:collapse;margin-top:6px;">' . $rows . '</table>';
$html .= '<div style="margin-top:18px;"><div style="color:#6f6f6a;font-size:13px;margin-bottom:5px;">Missatge</div>';
$html .= '<div style="white-space:pre-wrap;background:#ffffff;border:1px solid #ddddd8;padding:12px;color:#111110;font-size:14px;line-height:1.6;">' . $esc($missatge) . '</div></div>';
$html .= '<p style="color:#6f6f6a;font-size:12px;margin-top:22px;">Respon aquest correu per contestar el visitant.</p>';
$html .= '</div></body></html>';

// --- multipart/alternative ---
$boundary = '=_lbcn_' . bin2hex(random_bytes(8));
$headers  = "From: Web LinuxBCN <no-reply@linuxbcn.com>\r\n";
$headers .= "Reply-To: $nom <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";

$body  = "--$boundary\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $text . "\r\n\r\n";
$body .= "--$boundary\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$body .= $html . "\r\n\r\n";
$body .= "--$boundary--\r\n";

if (!mail($to, $subject, $body, $headers)) {
    out(500, array('error' => "No s'ha pogut enviar el missatge"));
}
out(200, array('ok' => true));
