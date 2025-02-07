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


// Bucket List

function toggleItem(item) {
  // Toggle the 'completed' class on the clicked item
  item.classList.toggle('completed');
}

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('#bucket-list li');
  
  // Load saved completed state
  items.forEach(item => {
    if (localStorage.getItem(item.textContent) === 'completed') {
      item.classList.add('completed');
    }
  });

  // Event listener to toggle item
  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('completed');
      // Save state to localStorage
      if (item.classList.contains('completed')) {
        localStorage.setItem(item.textContent, 'completed');
      } else {
        localStorage.removeItem(item.textContent);
      }
    });
  });
});

