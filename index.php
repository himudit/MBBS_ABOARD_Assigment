<?php
// Initialize error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Study MBBS Abroad | University Insights</title>
    <meta name="description" content="Study MBBS abroad in top universities across Russia, Uzbekistan, Kazakhstan, Philippines, Georgia, Kyrgyzstan, and Egypt. Get detailed information about admission process and eligibility.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="static/css/custom.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <?php include 'templates/navigation.php'; ?>

    <!-- Hero Section -->
    <?php include 'templates/hero.php'; ?>

    <!-- Benefits Section -->
    <?php include 'templates/benefits.php'; ?>

    <!-- Countries Section -->
    <?php include 'templates/countries.php'; ?>

    <!-- Admission Process Section -->
    <?php include 'templates/process.php'; ?>

    <!-- Contact Form Section -->
    <?php include 'templates/contact.php'; ?>

    <!-- Footer -->
    <?php include 'templates/footer.php'; ?>

    <!-- Scripts -->
    <script src="static/js/main.js"></script>
    <script src="static/js/validation.js"></script>
    <script src="static/js/analytics.js"></script>
</body>
</html>
