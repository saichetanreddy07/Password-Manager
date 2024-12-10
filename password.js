// Function to handle form submission
function submitForm() {
    // Data to be sent in the POST request
    const formData = new FormData();
    formData.append('website', document.getElementById('website').value);
    formData.append('username', document.getElementById('username').value);
    formData.append('password', document.getElementById('password').value);

    // Fetch options for the POST request
    const requestOptions = {
        method: 'POST',
        body: formData
    };

    // URL to which the POST request will be sent
    const url = 'save_password.php';

    // Make the POST request
    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // assuming the response is text
        })
        .then(data => {
            alert(data); // show the response from the server
            // Optionally, you can clear the form fields after successful submission
            document.getElementById('website').value = '';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        })
        .catch(error => {
            console.error('There was a problem with the POST request:', error);
        });
}

// Event listener to submit form when the button is clicked
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm(); // Call the function to submit the form
});

// Event listener for the view passwords button
document.getElementById('viewPasswordsBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button behavior
    window.open('view_password.html', '_blank'); // Open view passwords page in a new window/tab
});
