// File: routes/tb_level.js
const express = require("express");
const router = express.Router();

// Import controller
const tb_levelController = require("../controllers/tb_level");

// Define endpoints
router.get("/", tb_levelController.getAll); // Get all data
router.get("/:id", tb_levelController.getById); // Get data by id
router.post("/", tb_levelController.create); // Create new data
router.put("/:id", tb_levelController.update); // Update data by id
router.delete("/:id", tb_levelController.delete); // Delete data by id

// Export router
module.exports = router;
