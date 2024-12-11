<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data and sanitize
    $name = htmlspecialchars($_POST['name']);
    $dept = htmlspecialchars($_POST['dept']);
    $usn = htmlspecialchars($_POST['usn']);
    $email = htmlspecialchars($_POST['email']);
    $dob = htmlspecialchars($_POST['dob']);
    $gender = htmlspecialchars($_POST['gender']);

    // Display collected data
    echo "<h2>Registration Successful!</h2>";
    echo "<p><strong>Name:</strong> " . $name . "</p>";
    echo "<p><strong>Department:</strong> " . $dept . "</p>";
    echo "<p><strong>USN:</strong> " . $usn . "</p>";
    echo "<p><strong>Email:</strong> " . $email . "</p>";
    echo "<p><strong>Date of Birth:</strong> " . $dob . "</p>";
    echo "<p><strong>Gender:</strong> " . ucfirst($gender) . "</p>";
} else {
    echo "Invalid request.";
}
?>
