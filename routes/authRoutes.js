const express = require("express");
const authController = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/user", authenticateToken, authController.getUser);

module.exports = router;
