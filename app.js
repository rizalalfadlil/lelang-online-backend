// File: app.js
const express = require("express");
const cors = require('cors')
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// Import routers
const tb_masyarakatRouter = require("./routes/tb_masyarakat");
const tb_barangRouter = require("./routes/tb_barang");
const tb_lelangRouter = require("./routes/tb_lelang");
const tb_history_lelangRouter = require("./routes/tb_history_lelang");
const tb_petugasRouter = require("./routes/tb_petugas");
const tb_levelRouter = require("./routes/tb_level");
const loginRouter = require("./routes/login");

// Use routers
app.use("/api/tb_masyarakat", tb_masyarakatRouter);
app.use("/api/tb_barang", tb_barangRouter);
app.use("/api/tb_lelang", tb_lelangRouter);
app.use("/api/tb_history_lelang", tb_history_lelangRouter);
app.use("/api/tb_petugas", tb_petugasRouter);
app.use("/api/tb_level", tb_levelRouter);
app.use("/api/login", loginRouter);

// Listen to port
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
