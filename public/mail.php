<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request.']);
    exit;
}

// Sanitise inputs
function clean($val) {
    return htmlspecialchars(strip_tags(trim((string)$val)), ENT_QUOTES, 'UTF-8');
}

$firstName = clean($data['firstName'] ?? '');
$lastName  = clean($data['lastName']  ?? '');
$email     = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone     = clean($data['phone']     ?? '');
$firmName  = clean($data['firmName']  ?? '');
$firmType  = clean($data['firmType']  ?? '');
$website   = clean($data['website']   ?? '');
$services  = is_array($data['services'] ?? null) ? implode(', ', array_map('clean', $data['services'])) : '';
$message   = clean($data['message']   ?? '');

if (!$firstName || !$email) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Name and email are required.']);
    exit;
}

$recipients = [
    'zubair@zarmediagroup.com',
    'zubayr@zarmediagroup.com',
    'mubarak@zarmediagroup.com',
    'info@zarmediagroup.com',
];

$subject = "New Contact Form Submission — $firstName $lastName";

$body = "
==============================================
  NEW ENQUIRY — ZAR MEDIA GROUP
==============================================

NAME:       $firstName $lastName
EMAIL:      $email
PHONE:      $phone

FIRM NAME:  $firmName
FIRM TYPE:  $firmType
WEBSITE:    $website

SERVICES OF INTEREST:
  $services

MESSAGE:
  $message

==============================================
  This email was sent from the contact form at zarmediagroup.com
==============================================
";

$headers  = "From: Zar Media Group Website <noreply@zarmediagroup.com>\r\n";
$headers .= "Reply-To: $firstName $lastName <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$allSent = true;
foreach ($recipients as $recipient) {
    $sent = mail($recipient, $subject, $body, $headers);
    if (!$sent) $allSent = false;
}

if ($allSent) {
    echo json_encode(['success' => true, 'message' => 'Your message has been sent.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send. Please try again or email us directly.']);
}