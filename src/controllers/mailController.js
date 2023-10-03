const Mail = require("../models/mailModel");

// función para enviar correos
exports.sendMail = (req, res) => {
  let { to, subject, html } = req.body;

  let mail = new Mail(to, subject, html);

  mail.send((error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).send(`Email enviado correctamente a: ${to}`);
    }
  });
};
