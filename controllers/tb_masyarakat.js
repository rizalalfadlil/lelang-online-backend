// File: controllers/tb_masyarakat.js
const { tb_masyarakat } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const data = await tb_masyarakat.findAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tb_masyarakat.findByPk(id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).send("Data not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.create = async (req, res) => {
  try {
    const { nama_lengkap, username, password, telp } = req.body;
    const data = await tb_masyarakat.create({
      nama_lengkap,
      username,
      password,
      telp,
    });
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    // Check if error is caused by unique constraint violation
    if (err.name === "SequelizeUniqueConstraintError") {
      // Get the field and value that caused the error
      const field = err.errors[0].path;
      const value = err.errors[0].value;
      // Send error message
      res.status(400).send(`Username ${value} telah digunakan`);
    } else {
      // Send generic error message
      res.status(500).send("Internal server error");
    }
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { nama_lengkap, username, password, telp } = req.body;
    const data = await tb_masyarakat.update(
      {
        nama_lengkap,
        username,
        password,
        telp,
      },
      {
        where: { id_user: id },
      }
    );
    if (data[0] === 1) {
      res.send("Update successful");
    } else {
      res.status(404).send("Data not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tb_masyarakat.destroy({
      where: { id_user: id },
    });
    if (data === 1) {
      res.send("Delete successful");
    } else {
      res.status(404).send("Data not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
