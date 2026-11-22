const html = document.documentElement;
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameOrEmail = document.getElementById('userInput').value;
    const password = document.getElementById('passInput').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    let user = users.find(u => u.username === usernameOrEmail || u.email === usernameOrEmail);

    if (user !== undefined && password === user.password) {
        loginMessage.textContent = 'Login successful!';
        loginMessage.classList.remove('text-red-500');
        loginMessage.classList.add('text-green-500');

        localStorage.setItem('loggedInUser', JSON.stringify({
            username: user.username,
            email: user.email,
            dob: user.dob,
            role: user.role
        }));
        
        if (user.role === 'admin') {
            window.location.href = 'userManagement.html';
        }

    } else {
        localStorage.removeItem('loggedInUser');
        
        loginMessage.textContent = 'Invalid username/email or password.';
        loginMessage.classList.remove('text-green-500');
        loginMessage.classList.add('text-red-500');
    }
});