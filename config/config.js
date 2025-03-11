require("dotenv").config();

module.exports = {
    secretKey: process.env.JWT_SECRET || 'default-secret-key', // Baca dari .env atau gunakan default
    dbConfig: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        database: process.env.DB_NAME || 'node_auth_db',
    }
};
