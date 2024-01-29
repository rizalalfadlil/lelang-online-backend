// File: controllers/tb_barang.js
const { tb_barang } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const data = await tb_barang.findAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tb_barang.findByPk(id);
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
    const { nama_barang, tgl, harga_awal, deskripsi_barang } = req.body;
    const data = await tb_barang.create({
      nama_barang,
      tgl,
      harga_awal,
      deskripsi_barang,
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
    const { nama_barang, tgl, harga_awal, deskripsi_barang } = req.body;
    const data = await tb_barang.update(
      {
        nama_barang,
        tgl,
        harga_awal,
        deskripsi_barang,
      },
      {
        where: { id_barang: id },
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
    const data = await tb_barang.destroy({
      where: { id_barang: id },
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
