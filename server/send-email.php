<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$name = trim($input['name'] ?? '');
$phone = trim($input['phone'] ?? '');
$email = trim($input['email'] ?? '');
$message = trim($input['message'] ?? '');

if (empty($name) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// Email configuration
$to = 'zuiyrandom@gmail.com';
$subject = '🔥 ახალი დაკვეთა metaweb.ge-დან!';
$from = 'noreply@metaweb.ge';

// Create email content
$emailContent = "
🔥 ახალი დაკვეთა metaweb.ge-დან!

კლიენტის ინფორმაცია:
👤 სახელი: $name
📞 ტელეფონი: $phone
" . (!empty($email) ? "📧 ელ-ფოსტა: $email\n" : "") . "

💬 შეტყობინება:
$message

⏰ გაგზავნილია: " . date('Y-m-d H:i:s', time() + 4*3600) . " (თბილისის დრო)

🚀 სწრაფი რეაგირება! დარეკეთ კლიენტს 5-10 წუთში მაქსიმალური შედეგისთვის.

---
metaweb.ge - საიტის დამზადება საქართველოში
";

// Create HTML email content
$htmlContent = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: 'Noto Sans Georgian', Arial, sans-serif; margin: 0; padding: 20px; background: #f8f9fa; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .info-box { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .info-item { margin-bottom: 15px; }
        .label { color: #495057; font-weight: bold; font-size: 16px; }
        .value { font-size: 18px; color: #212529; margin-top: 5px; }
        .message { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; line-height: 1.6; }
        .cta { background: linear-gradient(45deg, #28a745, #20c997); color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0; }
        .footer { text-align: center; padding: 20px 0; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1 style='margin: 0; font-size: 28px;'>🔥 ახალი დაკვეთა!</h1>
            <p style='margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;'>metaweb.ge საიტიდან</p>
        </div>
        
        <div class='content'>
            <h2 style='color: #333; margin-top: 0; font-size: 24px;'>კლიენტის ინფორმაცია:</h2>
            
            <div class='info-box'>
                <div class='info-item'>
                    <div class='label'>👤 სახელი:</div>
                    <div class='value'>$name</div>
                </div>
                
                <div class='info-item'>
                    <div class='label'>📞 ტელეფონი:</div>
                    <div class='value'><a href='tel:$phone' style='color: #007bff; text-decoration: none;'>$phone</a></div>
                </div>
                
                " . (!empty($email) ? "
                <div class='info-item'>
                    <div class='label'>📧 ელ-ფოსტა:</div>
                    <div class='value'><a href='mailto:$email' style='color: #007bff; text-decoration: none;'>$email</a></div>
                </div>
                " : "") . "
                
                <div class='info-item'>
                    <div class='label'>💬 შეტყობინება:</div>
                    <div class='message'>" . nl2br(htmlspecialchars($message)) . "</div>
                </div>
            </div>
            
            <div class='cta'>
                <h3 style='margin: 0 0 10px 0; font-size: 20px;'>🚀 სწრაფი რეაგირება!</h3>
                <p style='margin: 0; font-size: 16px; opacity: 0.9;'>დარეკეთ კლიენტს 5-10 წუთში მაქსიმალური შედეგისთვის</p>
            </div>
            
            <div class='footer'>
                <p style='margin: 0;'>გაგზავნილია: " . date('l, F j, Y \a\t g:i A', time() + 4*3600) . " (თბილისის დრო)</p>
                <p style='margin: 5px 0 0 0; font-size: 12px;'>metaweb.ge - საიტის დამზადება საქართველოში</p>
            </div>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ' . $from,
    'Reply-To: ' . (!empty($email) ? $email : $from),
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$success = mail($to, $subject, $htmlContent, implode("\r\n", $headers));

if ($success) {
    // Log the submission
    $logEntry = date('Y-m-d H:i:s') . " - Email sent to $to\n";
    $logEntry .= "Name: $name, Phone: $phone, Email: $email\n";
    $logEntry .= "Message: " . substr($message, 0, 100) . "...\n\n";
    file_put_contents('contact-submissions.log', $logEntry, FILE_APPEND | LOCK_EX);
    
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email'
    ]);
}
?>