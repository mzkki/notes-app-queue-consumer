const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'admin@binaanugerahsukses.com',
      to: targetEmail,
      subject: 'Ekspor Catatan',
      html: '<div style="width: 100%; background-color: #EADBC8; padding: 50px"> <span style="color: blue">Haris Muzakki</span> <<a href="mailto:harismzkki@binaanugerahsukses.com" style="color: red"> harismzkki@binaanugerahsukses.com </a>></div>',
      text: 'Terlampir hasil dari ekspor catatan',
      attachments: [
        {
          filename: 'notes.json',
          content,
        },
      ],
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
