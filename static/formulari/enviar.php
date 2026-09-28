<?php
/**
 * Gestor del formulari de contacte de linuxbcn.com.
 * Envia un avis intern i una confirmacio HTML al visitant. No desa PII ni IPs.
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

function email_frame($lang, $title, $intro, $rows, $missatge, $legal) {
    $logo = '<span style="font-family:Helvetica,Arial,sans-serif;font-size:22px;font-weight:700;letter-spacing:-0.6px;color:#111110;">Linux<span style="color:#d4600a;">BCN</span></span>';
    $tag  = '<div style="font-family:Menlo,Consolas,monospace;font-size:11px;color:#6f6f6a;margin-top:5px;">' . ($lang === 'en' ? 'Tailored digital solutions' : 'Solucions digitals a mida') . '</div>';
    $msgLabel = $lang === 'en' ? 'Message' : 'Missatge';
    $h  = '<!DOCTYPE html><html lang="' . $lang . '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>';
    $h .= '<body style="margin:0;padding:0;background:#fdf6ef;">';
    $h .= '<div style="max-width:600px;margin:0 auto;padding:24px 20px;font-family:Helvetica,Arial,sans-serif;">';
    $h .= '<div style="border-top:4px solid #d4600a;padding:18px 0 10px;">' . $logo . $tag . '</div>';
    $h .= '<h1 style="font-size:18px;font-weight:700;color:#111110;margin:18px 0 6px;">' . $title . '</h1>';
    if ($intro !== '') $h .= '<p style="color:#555550;font-size:14px;line-height:1.6;margin:0 0 10px;">' . $intro . '</p>';
    $h .= '<table role="presentation" style="width:100%;border-collapse:collapse;margin-top:6px;">' . $rows . '</table>';
    if ($missatge !== '') {
        $h .= '<div style="margin-top:18px;"><div style="color:#6f6f6a;font-size:13px;margin-bottom:5px;">' . $msgLabel . '</div>';
        $h .= '<div style="white-space:pre-wrap;background:#ffffff;border:1px solid #ddddd8;padding:12px;color:#111110;font-size:14px;line-height:1.6;">' . $missatge . '</div></div>';
    }
    $h .= '<hr style="border:none;border-top:1px solid #ddddd8;margin:24px 0 12px;">';
    $h .= $legal;
    $h .= '</div></body></html>';
    return $h;
}

function send_mail($to, $subject, $replyName, $replyEmail, $html, $text) {
    $b = '=_lbcn_' . bin2hex(random_bytes(8));
    $h  = "From: Web LinuxBCN <no-reply@linuxbcn.com>\r\n";
    if ($replyEmail !== '') $h .= "Reply-To: {$replyName} <{$replyEmail}>\r\n";
    $h .= "MIME-Version: 1.0\r\n";
    $h .= "Content-Type: multipart/alternative; boundary=\"{$b}\"\r\n";
    $body  = "--{$b}\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n" . $text . "\r\n\r\n";
    $body .= "--{$b}\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n" . $html . "\r\n\r\n";
    $body .= "--{$b}--\r\n";
    return mail($to, $subject, $body, $h);
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
$lang     = (isset($_POST['lang']) && $_POST['lang'] === 'en') ? 'en' : 'ca';
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

$fila = function($label, $valor) use ($esc) {
    return '<tr>'
        . '<td style="padding:9px 12px 9px 0;border-bottom:1px solid #ddddd8;color:#6f6f6a;font-size:13px;white-space:nowrap;vertical-align:top;">' . $esc($label) . '</td>'
        . '<td style="padding:9px 0;border-bottom:1px solid #ddddd8;color:#111110;font-size:14px;">' . $esc($valor) . '</td>'
        . '</tr>';
};

$rows  = $fila($lang === 'en' ? 'Name' : 'Nom', $nom);
$rows .= $fila($lang === 'en' ? 'Email' : 'Correu', $email);
if ($tipus !== '') $rows .= $fila($lang === 'en' ? 'Type' : 'Tipus', $tipus);
if ($interes_net) $rows .= $fila($lang === 'en' ? 'Interests' : 'Interessos', implode(', ', $interes_net));

$priv = $lang === 'en' ? 'https://linuxbcn.com/en/privacitat/' : 'https://linuxbcn.com/ca/privacitat/';
$legalText = $lang === 'en'
    ? 'LinuxBCN · hola@linuxbcn.com · Barcelona<br>This email confirms your enquiry through linuxbcn.com. We use your data only to reply to you. See the <a href="' . $priv . '" style="color:#ad5209;">privacy policy</a>.'
    : 'LinuxBCN · hola@linuxbcn.com · Barcelona<br>Aquest correu &eacute;s la confirmaci&oacute; de la teva consulta a linuxbcn.com. Fem servir les teves dades nom&eacute;s per respondre&#39;t. Consulta la <a href="' . $priv . '" style="color:#ad5209;">pol&iacute;tica de privacitat</a>.';
$legal = '<p style="color:#6f6f6a;font-size:11px;line-height:1.6;margin:0;">' . $legalText . '</p>';

$msgEsc = $esc($missatge);

// Notificacio interna
$titleUs = $lang === 'en' ? 'New enquiry from the website' : 'Nova consulta des del web';
$htmlUs = email_frame($lang, $titleUs, '', $rows, $msgEsc, $legal);
$textUs = ($lang === 'en' ? "New enquiry from the website" : "Nova consulta des del web") . "\n\n"
    . "Nom: $nom\nCorreu: $email\n"
    . ($tipus !== '' ? "Tipus: $tipus\n" : '')
    . ($interes_net ? "Interessos: " . implode(', ', $interes_net) . "\n" : '')
    . "\nMissatge:\n$missatge\n";
send_mail('hola@linuxbcn.com', $titleUs . ' - LinuxBCN', $nom, $email, $htmlUs, $textUs);

// Confirmacio al visitant (nomes si el POST ve del nostre web)
if ($ref === 'linuxbcn.com' || $ref === 'www.linuxbcn.com') {
    $titleYou = $lang === 'en' ? 'We have received your enquiry' : 'Hem rebut la teva consulta';
    $introYou = $lang === 'en'
        ? 'Thank you for writing to us. We have received your enquiry and will reply by email, usually within 48 hours. Here is a copy of what you sent us:'
        : 'Gràcies per escriure\'ns. Hem rebut la teva consulta i et respondrem per correu, normalment en menys de 48 hores. Aquí tens una còpia del que ens has enviat:';
    $htmlYou = email_frame($lang, $titleYou, $introYou, $rows, $msgEsc, $legal);
    $textYou = ($lang === 'en' ? "Thank you for writing to us. We have received your enquiry and will reply by email, usually within 48 hours." : "Gracies per escriure'ns. Hem rebut la teva consulta i et respondrem per correu, normalment en menys de 48 hores.") . "\n\nMissatge:\n$missatge\n\nLinuxBCN - hola@linuxbcn.com";
    send_mail($email, $titleYou . ' - LinuxBCN', 'LinuxBCN', 'hola@linuxbcn.com', $htmlYou, $textYou);
}

out(200, array('ok' => true));
