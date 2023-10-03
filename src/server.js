const app = require("./app");

// Defino el puerto a usar
const port = process.env.PORT || 3001;

// Se inicia el servidor
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: ", port);
});
