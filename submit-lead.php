<?php
ob_start();
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Force JSON response type
header('Content-Type: application/json');

// Register shutdown function to catch fatal errors
function shutdownHandler() {
    $error = error_get_last();
    if ($error !== null && in_array($error['type'], [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR])) {
        ob_end_clean();
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => 'Server error occurred',
            'debug' => $error['message']
        ]);
        exit();
    }
}
register_shutdown_function('shutdownHandler');

// Set error handler for non-fatal errors
set_error_handler(function($errno, $errstr) {
    ob_end_clean();
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Server error occurred',
        'debug' => $errstr
    ]);
    exit();
});

try {
    // Get POST data
    $json = file_get_contents('php://input');
    if (!$json) {
        throw new Exception('No data received');
    }

    $data = json_decode($json, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data: ' . json_last_error_msg());
    }

    // Validate required fields
    $required_fields = ['name', 'email', 'phone', 'country'];
    $errors = [];

    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            $errors[] = ucfirst($field) . " is required";
        }
    }

    // Validate email
    if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }

    // Validate phone (basic validation)
    if (!empty($data['phone'])) {
        $phone = preg_replace('/[^0-9+]/', '', $data['phone']);
        if (strlen($phone) < 10) {
            $errors[] = "Phone number must have at least 10 digits";
        }
    }

    // If there are validation errors, return them
    if (!empty($errors)) {
        ob_end_clean();
        http_response_code(400);
        echo json_encode([
            'status' => 'error',
            'message' => 'Validation failed',
            'errors' => $errors
        ]);
        exit;
    }

    // Log the lead
    $log_file = 'leads.log';
    $log_entry = date('Y-m-d H:i:s') . " - New lead: " . json_encode($data) . "\n";
    if (!file_put_contents($log_file, $log_entry, FILE_APPEND)) {
        throw new Exception('Failed to save lead data');
    }

    // Clear any buffered output and send success response
    ob_end_clean();
    echo json_encode([
        'status' => 'success',
        'message' => 'Lead received successfully'
    ]);

} catch (Exception $e) {
    error_log("Lead submission error: " . $e->getMessage());
    ob_end_clean();
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}