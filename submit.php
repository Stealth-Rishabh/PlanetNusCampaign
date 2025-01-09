<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php-errors.log');

// CORS headers
header("Access-Control-Allow-Origin: *"); // Allow all origins for development
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header('Content-Type: application/json');

try {
    // Get POST data
    $name = $_POST['contact-name'];
    $email = $_POST['contact-email'];
    $phone = $_POST['contact-phone'];
    $city = $_POST['contact-city'];
    $qualification = $_POST['contact-qualification'];
    $program = $_POST['contact-program'];
    $message = $_POST['contact-message'] ?? '';
    $referrer = $_POST['referrer_name'] ?? '';
    $keyword = $_POST['keyword'] ?? '';
    $source = $_POST['source'] ?? 'website';
    $orderid = $_POST['orderid'] ?? '973';
    $sitename = $_POST['sitename'] ?? 'BFISWebsite2022';
    $campaign_url = $_POST['campaign_url'] ?? '';
    $campaign_name = $_POST['campaign_name'] ?? '';
    $network = $_POST['network'] ?? '';

    // Validate required fields
    if (empty($name) || empty($email) || empty($phone)) {
        throw new Exception('All fields are mandatory');
    }

    // Prepare data for CRM in the exact format that works
    $uniFields = array(
        'name' => urlencode($name),
        'phone' => urlencode($phone),
        'email' => urlencode($email),
        'city' => urlencode($city),
        'qualification' => urlencode($qualification),
        'program' => urlencode($program),
        'query' => urlencode($message),
        'http_referer' => urlencode($referrer),
        'search_keyword' => urlencode($keyword),
        'campaign_url' => urlencode($campaign_url),
        'campaign_name' => urlencode($campaign_name),
        'network' => urlencode($network),
        'source' => urlencode($source),
        'ORDERID' => urlencode($orderid),
        'SITENAME' => urlencode($sitename)
    );

    // Build query string
    $uni_fields_string = '';
    foreach ($uniFields as $key => $value) {
        $uni_fields_string .= $key . '=' . $value . '&';
    }
    rtrim($uni_fields_string, '&');

    // Make the CRM request
    $post = curl_init();
    curl_setopt($post, CURLOPT_URL, 'https://crm.stealthdigital.in/lp/index');
    curl_setopt($post, CURLOPT_POST, count($uniFields));
    curl_setopt($post, CURLOPT_POSTFIELDS, $uni_fields_string);
    curl_setopt($post, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($post, CURLOPT_FOLLOWLOCATION, true);
    
    $content = curl_exec($post);
    $httpCode = curl_getinfo($post, CURLINFO_HTTP_CODE);
    
    error_log("CRM Response Code: " . $httpCode);
    error_log("CRM Response: " . $content);

    curl_close($post);

    // Return JSON response for the React app
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully',
        'response' => $content
    ]);

} catch (Exception $e) {
    error_log("Error: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>