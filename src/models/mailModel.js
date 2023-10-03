// Importamos Nodemailer
const nodemailer = require('nodemailer');
require('dotenv').config();

class Mail {

  //recibo los datos y se los paso al constructor
  constructor(to, subject, html) {
    this.to = to;
    this.subject = subject;
    this.html = html;
  }

  // recibo una función callback para enviar el correo
  send(callback) {

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    //  opciones del correo con los datos del objeto
    let mailOptions = {
      from: 'jeferson.danilo.castro@gmail.com',
      to: this.to,
      subject: this.subject,
      html: this.html
    };

    // Enviamos el correo con el transporte y las opciones
    transporter.sendMail(mailOptions, callback);
  }
}

// Exporto la clase
module.exports = Mail;
