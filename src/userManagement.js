const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser && loggedInUser.role === 'admin') {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = 'Welcome ' + loggedInUser.username;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usersTableBody = document.getElementById('usersTableBody');

    users.forEach(user => {
        const row = document.createElement('tr');

        const values = [user.username, user.email, user.dob, user.role];

        values.forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            cell.className = 'border border-gray-300 p-3';
            row.appendChild(cell);
        });

        usersTableBody.appendChild(row);
    });

} else {
    window.location.href = 'login.html';
}