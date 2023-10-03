const express = require("express");
const cors = require("cors");
const app = express();

const mailController = require("./controllers/mailController");

app.use(express.json());
app.use(cors());

// Rutas a usar en el servidor
app.get("/", (req, res) => {
  res.send("API OKY DOKY :)");
});

app.get("/enviar-mail", (req, res) => {
  res.send("api activa bebe");
});

app.post("/enviar-correo", mailController.sendMail);

// Exporto la app
module.exports = app;
