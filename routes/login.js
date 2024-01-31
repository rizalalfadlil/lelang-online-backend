// File: routes/login.js
const express = require("express");
const router = express.Router();

// Import controller
const loginController = require("../controllers/loginController");

// Define endpoint
router.post("/", loginController.login); // Login process

// Export router
module.exports = router;
