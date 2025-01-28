// middleware/corsSetup.js
const cors = require('cors');

// Pobranie dozwolonych domen z zmiennej środowiskowej
const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS
  ? process.env.CORS_ALLOWED_ORIGINS.split(',') // Jeśli zmienna istnieje, przekształcamy ją na tablicę
  : ['http://localhost:3000']; // Domyślna domena, jeśli zmienna nie jest ustawiona

const corsOptions = {
  origin: allowedOrigins, // Adresy frontendowe z pliku .env lub domyślna wartość
  methods: ['GET', 'POST'], // Dozwolone metody HTTP
  credentials: true, // Umożliwia przesyłanie ciasteczek lub nagłówków autoryzacyjnych
};

module.exports = cors(corsOptions); // Eksportujemy konfigurację CORS

