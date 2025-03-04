const bcrypt = require('bcryptjs');

// Simulasi database pengguna
const users = [
    {
        id: 1,
        username: 'user1',
        password: bcrypt.hashSync('password1', 8) // Hash password
    },
    {
        id: 2,
        username: 'user2',
        password: bcrypt.hashSync('password2', 8) // Hash password
    }
];

module.exports = users;