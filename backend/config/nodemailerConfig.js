require('dotenv').config(); // Załadowanie zmiennych środowiskowych z pliku .env
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // Gmail SMTP
  port: 587,               // Port do SMTP (dla TLS)
  secure: false,           // Używamy TLS (false, bo port 587)
  auth: {
    user: process.env.EMAIL_USER,  // z pliku .env
    pass: process.env.EMAIL_PASS,  
  },
});

module.exports = transporter;