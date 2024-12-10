// Function to fetch passwords from the server and dynamically populate the table
function fetchPasswords() {
    fetch('get_password.php')
        .then(response => response.json())
        .then(data => {
            const passwordTable = document.getElementById('passwordTable');
            const tbody = passwordTable.getElementsByTagName('tbody')[0];

            // Clear existing table rows
            tbody.innerHTML = '';

            // Add new rows for each password
            data.forEach(password => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${password.website}</td>
                    <td>${password.username}</td>
                    <td class="password-cell" data-original-password="${password.password}">${'*'.repeat(password.password.length)}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching passwords:', error));
}

// Call fetchPasswords function when the page loads
window.onload = fetchPasswords;

// Add event listener for the "Show Passwords" button
document.getElementById('showPasswordsBtn').addEventListener('click', function() {
    var passwordCells = document.querySelectorAll('.password-cell');

    passwordCells.forEach(function(cell) {
        if (cell.textContent === '*'.repeat(cell.getAttribute("data-original-password").length)) {
            cell.textContent = cell.getAttribute("data-original-password");
        } else {
            cell.textContent = '*'.repeat(cell.getAttribute("data-original-password").length);
        }
    });
});

// Check if the "Show Passwords" button exists
var showPasswordsBtn = document.getElementById('showPasswordsBtn');
if (!showPasswordsBtn) {
    console.error("Show Passwords button not found.");
} else {
    console.log("Show Passwords button found.");
}
