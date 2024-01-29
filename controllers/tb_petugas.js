// File: controllers/tb_petugas.js
const { tb_petugas } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const data = await tb_petugas.findAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tb_petugas.findByPk(id);
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
    const { nama_petugas, username, password, id_level } = req.body;
    const data = await tb_petugas.create({
      nama_petugas,
      username,
      password,
      id_level,
    });
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { nama_petugas, username, password, id_level } = req.body;
    const data = await tb_petugas.update(
      {
        nama_petugas,
        username,
        password,
        id_level,
      },
      {
        where: { id_petugas: id },
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
    const data = await tb_petugas.destroy({
      where: { id_petugas: id },
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
