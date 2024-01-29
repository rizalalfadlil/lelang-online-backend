// File: routes/tb_petugas.js
const express = require("express");
const router = express.Router();

// Import controller
const tb_petugasController = require("../controllers/tb_petugas");

// Define endpoints
router.get("/", tb_petugasController.getAll); // Get all data
router.get("/:id", tb_petugasController.getById); // Get data by id
router.post("/", tb_petugasController.create); // Create new data
router.put("/:id", tb_petugasController.update); // Update data by id
router.delete("/:id", tb_petugasController.delete); // Delete data by id

// Export router
module.exports = router;
