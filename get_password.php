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

// Fetch passwords from the database
$sql = "SELECT website, username, password FROM password";
$result = $conn->query($sql);

$passwords = [];
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $passwords[] = $row;
    }
}

// Close connection
$conn->close();

// Return passwords as JSON
header('Content-Type: application/json');
echo json_encode($passwords);
?>
