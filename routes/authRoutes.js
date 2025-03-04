const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Endpoint untuk login
router.post('/login', authController.login);

// Endpoint untuk route yang dilindungi
router.get('/protected', authMiddleware.authenticateToken ,authController.protectedRoute);

// Link 1
// Link 2
// dst

module.exports = router;