const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Gunakan route otentikasi
app.use('/api/auth', authRoutes);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});