<?php
header('Content-Type: application/json');
header('Vary: Origin');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Restrict CORS to trusted origins only
$allowedOrigins = [
    'https://zarmediagroup.com',
    'https://www.zarmediagroup.com',
    'http://localhost:5173',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Basic size limit: reject unusually large payloads
$contentLength = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 25000) {
    http_response_code(413);
    echo json_encode(['success' => false, 'message' => 'Request too large.']);
    exit;
}

// Basic per-IP rate limit (5 requests / 10 minutes)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/zmg_mail_rate_' . sha1($ip) . '.json';
$now = time();
$windowSeconds = 600;
$maxRequests = 5;
$attempts = [];
if (is_file($rateFile)) {
    $decoded = json_decode((string)file_get_contents($rateFile), true);
    if (is_array($decoded)) {
        $attempts = $decoded;
    }
}
$attempts = array_values(array_filter($attempts, static fn($ts) => is_int($ts) && ($now - $ts) < $windowSeconds));
if (count($attempts) >= $maxRequests) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please try again later.']);
    exit;
}
$attempts[] = $now;
file_put_contents($rateFile, json_encode($attempts), LOCK_EX);

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
$websiteTrap = clean($data['websiteTrap'] ?? '');

// Honeypot trap for bots
if ($websiteTrap !== '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request.']);
    exit;
}

if (!$firstName || !$email) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Name and email are required.']);
    exit;
}

if (strlen($firstName) > 80 || strlen($lastName) > 80 || strlen($firmName) > 120 || strlen($message) > 3000) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'One or more fields are too long.']);
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
