// File: routes/tb_masyarakat.js
const express = require("express");
const router = express.Router();

// Import controller
const tb_masyarakatController = require("../controllers/tb_masyarakat");

// Define endpoints
router.get("/", tb_masyarakatController.getAll); // Get all data
router.get("/:id", tb_masyarakatController.getById); // Get data by id
router.post("/", tb_masyarakatController.create); // Create new data
router.put("/:id", tb_masyarakatController.update); // Update data by id
router.delete("/:id", tb_masyarakatController.delete); // Delete data by id

// Export router
module.exports = router;
