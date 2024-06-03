<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // You can perform any necessary processing/validation here
    // For demonstration purposes, we'll simply send an email with the form data

    // Email configuration
    $to = 's0069041@bis-school.com'; // Replace with your email address
    $subject = 'New Petition Signature';
    $message_body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $message_body)) {
        // Email sent successfully
        echo 'Thank you for signing the petition! Your signature has been submitted.';
    } else {
        // Email sending failed
        echo 'Oops! An error occurred while processing your request. Please try again later.';
    }
} else {
    // If the form wasn't submitted, return an error message
    echo 'Error: Access denied';
}
?>
