<?php
// Enable CORS
header("Access-Control-Allow-Origin: https://stealthlearn.in");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Handle preflight request (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Buffer all output to avoid any non-JSON output
ob_start();

// Capture any unexpected errors and send a JSON response
set_exception_handler(function ($e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Internal Server Error.']);
    ob_end_clean(); // Clean the output buffer
    exit;
});

// Capture any PHP errors and send a JSON response
set_error_handler(function ($errno, $errstr, $errfile, $errline) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Server error occurred.']);
    ob_end_clean(); // Clean the output buffer
    exit;
});

// Decode the form data from POST
$name = isset($_POST['contact-name']) ? htmlspecialchars(urldecode($_POST['contact-name']), ENT_QUOTES, 'UTF-8') : '';
$email = isset($_POST['contact-email']) ? htmlspecialchars(urldecode($_POST['contact-email']), ENT_QUOTES, 'UTF-8') : '';
$phone = isset($_POST['contact-phone']) ? htmlspecialchars(urldecode($_POST['contact-phone']), ENT_QUOTES, 'UTF-8') : '';
$city = isset($_POST['City']) ? htmlspecialchars(urldecode($_POST['City']), ENT_QUOTES, 'UTF-8') : '';
$qualification = isset($_POST['Qualification']) ? htmlspecialchars(urldecode($_POST['Qualification']), ENT_QUOTES, 'UTF-8') : '';
$program = isset($_POST['Program of Interest']) ? htmlspecialchars(urldecode($_POST['Program of Interest']), ENT_QUOTES, 'UTF-8') : '';
$company = isset($_POST['contact-company']) ? htmlspecialchars(urldecode($_POST['contact-company']), ENT_QUOTES, 'UTF-8') : '';
$subject = isset($_POST['contact-subject']) ? htmlspecialchars(urldecode($_POST['contact-subject']), ENT_QUOTES, 'UTF-8') : '';
$message = isset($_POST['contact-message']) ? htmlspecialchars(urldecode($_POST['contact-message']), ENT_QUOTES, 'UTF-8') : '';
$query = "<b>Company: </b>" . $company . "<br><b>Subject: </b>" . $subject . "<br><b>Message: </b>" . $message . 
         "<br><b>City: </b>" . $city . "<br><b>Qualification: </b>" . $qualification . 
         "<br><b>Program of Interest: </b>" . $program;
$referrer = isset($_POST['referrer_name']) ? htmlspecialchars(urldecode($_POST['referrer_name']), ENT_QUOTES, 'UTF-8') : '';
$keyword = isset($_POST['keyword']) ? htmlspecialchars(urldecode($_POST['keyword']), ENT_QUOTES, 'UTF-8') : '';
$source = isset($_POST['source']) ? htmlspecialchars(urldecode($_POST['source']), ENT_QUOTES, 'UTF-8') : '';
$orderid = isset($_POST['orderid']) ? htmlspecialchars(urldecode($_POST['orderid']), ENT_QUOTES, 'UTF-8') : '1040';
$sitename = isset($_POST['sitename']) ? htmlspecialchars(urldecode($_POST['sitename']), ENT_QUOTES, 'UTF-8') : 'GujratPlaneted';
$campaign_url = isset($_POST['campaign_url']) ? htmlspecialchars(urldecode($_POST['campaign_url']), ENT_QUOTES, 'UTF-8') : '';
$campaign_name = isset($_POST['campaign_name']) ? htmlspecialchars(urldecode($_POST['campaign_name']), ENT_QUOTES, 'UTF-8') : '';
$network = isset($_POST['network']) ? htmlspecialchars(urldecode($_POST['network']), ENT_QUOTES, 'UTF-8') : '';

// Check if required fields are filled
if (!empty($name) && !empty($email) && !empty($phone)) {
    $uniFields = array(
        'name' => $name,
        'phone' => $phone,
        'email' => $email,
        'query' => $query,
        'city' => $city,
        'qualification' => $qualification,
        'program' => $program,
        'http_referer' => $referrer,
        'search_keyword' => $keyword,
        'campaign_url' => $campaign_url,
        'campaign_name' => $campaign_name,
        'network' => $network,
        'source' => $source,
        'ORDERID' => $orderid,
        'SITENAME' => $sitename
    );

    // Build the query string
    $uni_fields_string = http_build_query($uniFields);

    // CRM URL
    $uniUrl = 'https://crm.stealthdigital.in/lp/index';

    // Initialize cURL
    $post = curl_init();
    curl_setopt($post, CURLOPT_URL, $uniUrl);
    curl_setopt($post, CURLOPT_POST, true);
    curl_setopt($post, CURLOPT_POSTFIELDS, $uni_fields_string);
    curl_setopt($post, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($post, CURLOPT_FOLLOWLOCATION, true);
    $content = curl_exec($post);

    // Check for cURL errors
    if (curl_errno($post)) {
        error_log("cURL error: " . curl_error($post));
        echo json_encode(['status' => 'error', 'message' => 'Failed to send data to CRM.']);
        ob_end_clean(); // Clean the output buffer
        curl_close($post);
        exit;
    }

    curl_close($post);

    // Check if CRM response is a valid JSON
    $response_data = json_decode($content, true);
    if ($response_data === null && json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['status' => 'error', 'message' => 'Unexpected response format from CRM.']);
        ob_end_clean(); // Clean the output buffer
        exit;
    }

    // Response handling
    if ($response_data && isset($response_data['status']) && $response_data['status'] === 'success') {
        echo json_encode(['status' => 'success', 'message' => 'Form submitted successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to submit form to CRM.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Required fields are missing.']);
}

// Clean the output buffer and flush the JSON response
ob_end_flush();
