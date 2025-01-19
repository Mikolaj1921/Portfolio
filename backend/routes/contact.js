// routes/contact.js

const express = require('express');
const router = express.Router();
const transporter = require('../config/nodemailerConfig');

// Obsługuje POST dla /contact
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
  
    // Sprawdzenie, czy wszystkie dane zostały przesłane
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Wszystkie pola są wymagane!' });
    }
  
    // Tworzenie obiektu do wysyłania e-maila
    const mailOptions = {
      from: email,  // Kto wysłał e-mail
      to: process.env.EMAIL_USER ,  // Twój e-mail, na który mają przychodzić wiadomości
      subject: `Nowa wiadomość od ${name}`,  // Temat e-maila
      text: `Masz nową wiadomość:\n\nImię i nazwisko: ${name}\nEmail: ${email}\n\nWiadomość: \n${message}`,  // Treść e-maila
    };
  
    try {
      // Wysłanie e-maila
      await transporter.sendMail(mailOptions);
  
      // Wysłanie odpowiedzi do klienta
      res.status(200).json({
        message: 'Wiadomość została wysłana!',
      });
    } catch (error) {
      console.error('Błąd przy wysyłaniu wiadomości:', error);
      res.status(500).send('Wystąpił błąd. Spróbuj ponownie.');
    }
});

module.exports = router;
