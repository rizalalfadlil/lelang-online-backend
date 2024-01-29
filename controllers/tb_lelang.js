// File: controllers/tb_lelang.js
const { tb_lelang } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const data = await tb_lelang.findAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tb_lelang.findByPk(id);
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
    const { id_barang, tgl_lelang, harga_akhir, id_user, id_petugas, status } =
      req.body;
    const data = await tb_lelang.create({
      id_barang,
      tgl_lelang,
      harga_akhir,
      id_user,
      id_petugas,
      status,
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
    const { id_barang, tgl_lelang, harga_akhir, id_user, id_petugas, status } =
      req.body;
    const data = await tb_lelang.update(
      {
        id_barang,
        tgl_lelang,
        harga_akhir,
        id_user,
        id_petugas,
        status,
      },
      {
        where: { id_lelang: id },
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
    const data = await tb_lelang.destroy({
      where: { id_lelang: id },
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
