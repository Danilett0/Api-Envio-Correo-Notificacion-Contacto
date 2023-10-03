const express = require("express");
const cors = require("cors");
const app = express();

const mailController = require("./controllers/mailController");

app.use(express.json());
app.use(cors());

// Rutas a usar en el servidor
app.get("/", (req, res) => {
  res.send(
    "Por el momento no tengo datos para mostrarte =) | recuerda usar el metodo POST y usar el metodo 'enviar-correo' "
  );
});

app.post("/enviar-correo", mailController.sendMail);

// Exporto la app
module.exports = app;
