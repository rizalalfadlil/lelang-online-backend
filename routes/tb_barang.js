// File: routes/tb_barang.js
const express = require("express");
const router = express.Router();

// Import controller
const tb_barangController = require("../controllers/tb_barang");

// Define endpoints
router.get("/", tb_barangController.getAll); // Get all data
router.get("/:id", tb_barangController.getById); // Get data by id
router.post("/", tb_barangController.create); // Create new data
router.put("/:id", tb_barangController.update); // Update data by id
router.delete("/:id", tb_barangController.delete); // Delete data by id

// Export router
module.exports = router;
