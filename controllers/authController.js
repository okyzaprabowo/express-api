const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const config = require('../config/config');

// Fungsi untuk login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Cari pengguna berdasarkan username
    const user = User.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verifikasi password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Buat token JWT
    const token = jwt.sign({ userId: user.id }, config.secretKey, { expiresIn: '1h' });
    res.json({ token });
};

// Fungsi untuk route yang dilindungi
exports.protectedRoute = (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
};