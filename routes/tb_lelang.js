// File: routes/tb_lelang.js
const express = require("express");
const router = express.Router();

// Import controller
const tb_lelangController = require("../controllers/tb_lelang");

// Define endpoints
router.get("/", tb_lelangController.getAll); // Get all data
router.get("/:id", tb_lelangController.getById); // Get data by id
router.post("/", tb_lelangController.create); // Create new data
router.put("/:id", tb_lelangController.update); // Update data by id
router.delete("/:id", tb_lelangController.delete); // Delete data by id

// Export router
module.exports = router;
