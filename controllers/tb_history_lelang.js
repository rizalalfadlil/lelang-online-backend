// File: controllers/tb_history_lelang.js
const { tb_history_lelang } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const data = await tb_history_lelang.findAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tb_history_lelang.findByPk(id);
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
    const { id_lelang, id_barang, id_user, penawaran_harga } = req.body;
    const data = await tb_history_lelang.create({
      id_lelang,
      id_barang,
      id_user,
      penawaran_harga,
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
    const { id_lelang, id_barang, id_user, penawaran_harga } = req.body;
    const data = await tb_history_lelang.update(
      {
        id_lelang,
        id_barang,
        id_user,
        penawaran_harga,
      },
      {
        where: { id_history: id },
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
    const data = await tb_history_lelang.destroy({
      where: { id_history: id },
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
