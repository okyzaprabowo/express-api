const db = require("../config/db");

const User = {
    create: async (username, email, password) => {
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        const [result] = await db.execute(sql, [username, email, password]);
        return result;
    },

    findByEmail: async (email) => {
        const sql = "SELECT * FROM users WHERE email = ?";
        const [rows] = await db.execute(sql, [email]);
        return rows;
    },

    findById: async (id) => {
        const sql = "SELECT id, username, email FROM users WHERE id = ?";
        const [rows] = await db.execute(sql, [id]);
        return rows;
    }
};

module.exports = User;
