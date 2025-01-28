require('dotenv').config(); // Wczytanie zmiennych środowiskowych
const express = require('express');
const cors = require('cors');
const corsSetup = require('./middleware/corsSetup'); // Import konfiguracji CORS
const contactRoute = require('./routes/contact'); // Trasa kontaktu

const app = express();

// Middleware CORS z dodatkowym logowaniem dla debugowania
app.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log(`[CORS Check] Origin: ${origin}`);
  next();
});

app.use(corsSetup); // Użycie konfiguracji CORS w całej aplikacji

// Middleware do obsługi JSON
app.use(express.json());

// Logowanie wszystkich żądań HTTP (przydatne do debugowania)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Nagłówki:', req.headers);
  next();
});

// Trasa główna
app.get('/', (req, res) => {
  res.send('Witaj na backendzie Node.js!');
});

// Trasa kontaktowa
app.use('/contact', contactRoute);

// Obsługa błędów dla nieznanych tras (404)
app.use((req, res) => {
  res.status(404).json({ error: 'Nie znaleziono zasobu' });
});

// Obsługa błędów serwera (500)
app.use((err, req, res, next) => {
  console.error('Błąd serwera:', err.stack);
  res.status(500).json({ error: 'Wewnętrzny błąd serwera' });
});

// Uruchomienie serwera
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
