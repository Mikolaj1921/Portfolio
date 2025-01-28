const cors = require('cors');

// Pobranie dozwolonych domen z pliku .env
const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS
  ? process.env.CORS_ALLOWED_ORIGINS.split(',')
  : ['http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    // Sprawdzenie, czy żądanie pochodzi z dozwolonego źródła
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS: Niedozwolony dostęp'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'], // Dozwolone metody HTTP
  credentials: true, // Zezwalanie na ciasteczka
};

module.exports = cors(corsOptions);
