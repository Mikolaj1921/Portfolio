// server.js
require('dotenv').config(); // Wczytanie zmiennych środowiskowych z pliku .env
const express = require('express');
const corsSetup = require('./middleware/corsSetup'); // Importujemy naszą konfigurację CORS
const app = express();
const contactRoute = require('./routes/contact');

// Middleware do CORS
app.use(corsSetup); // Zastosowanie konfiguracji CORS w całej aplikacji

// Logowanie żądań (przydatne do debugowania)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware do obsługi JSON
app.use(express.json());

// Endpointy

// Prosta trasa
app.get('/', (req, res) => {
  res.send('Witaj na backendzie Node.js!');
});

// Trasa do kontaktu
app.use('/contact', contactRoute);

// Obsługa błędów

// Obsługa błędów dla nieznanych tras (404)
app.use((req, res) => {
  res.status(404).json({ error: "Nie znaleziono zasobu" });
});

// Logowanie błędów serwera (500)
app.use((err, req, res, next) => {
  console.error("Błąd serwera:", err.stack);
  res.status(500).json({ error: "Wewnętrzny błąd serwera" });
});

// Uruchomienie serwera
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});


