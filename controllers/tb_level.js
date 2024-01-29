// File: controllers/tb_level.js
const { tb_level } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const data = await tb_level.findAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await tb_level.findByPk(id);
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
    const { level } = req.body;
    const data = await tb_level.create({
      level,
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
    const { level } = req.body;
    const data = await tb_level.update(
      {
        level,
      },
      {
        where: { id_level: id },
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
    const data = await tb_level.destroy({
      where: { id_level: id },
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
