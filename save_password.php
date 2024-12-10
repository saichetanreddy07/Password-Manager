<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "password_manager";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $website = $_POST["website"];
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO password (website, username, password) VALUES (?, ?, ?)");

    // Check if the statement was prepared properly
    if ($stmt) {
        // Bind parameters
        $stmt->bind_param("sss", $website, $username, $password);

        // Execute SQL statement
        if ($stmt->execute()) {
            echo "Password for " . $website . " saved successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close statement
        $stmt->close();
    } else {
        echo "Error: Unable to prepare SQL statement.";
    }
} else {
    echo "Error: Form data not received.";
}

// Close connection
$conn->close();
?>
