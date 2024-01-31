// File: controllers/loginController.js
const { tb_masyarakat, tb_petugas } = require("../models");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body; // Get username and password from request body
    const user = await tb_masyarakat.findOne({ where: { username, password } }); // Find user in tb_masyarakat table
    const staff = await tb_petugas.findOne({ where: { username, password } }); // Find staff in tb_petugas table
    if (user) {
      // If user is found
      res.json({ message: "Login berhasil sebagai user", data: user }); // Send success message and user data
    } else if (staff) {
      // If staff is found
      res.json({ message: "Login berhasil sebagai staff", data: staff }); // Send success message and staff data
    } else {
      // If neither user nor staff is found
      res.status(401).send("username atau password salah"); // Send error message
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
