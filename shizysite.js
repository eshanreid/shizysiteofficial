// Predefined users
const users = [
    { username: "eshy", password: "thickthighs311" },
    { username: "lizy", password: "iloveEsh69" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if the entered credentials match any predefined user
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirect to main page on successful login
        window.location.href = 'main.html';
    } else {
        // Show error message if login fails
        errorMessage.textContent = 'nuh uh';
    }
});

// Sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}


