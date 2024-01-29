// File: routes/tb_history_lelang.js
const express = require("express");
const router = express.Router();

// Import controller
const tb_history_lelangController = require("../controllers/tb_history_lelang");

// Define endpoints
router.get("/", tb_history_lelangController.getAll); // Get all data
router.get("/:id", tb_history_lelangController.getById); // Get data by id
router.post("/", tb_history_lelangController.create); // Create new data
router.put("/:id", tb_history_lelangController.update); // Update data by id
router.delete("/:id", tb_history_lelangController.delete); // Delete data by id

// Export router
module.exports = router;
