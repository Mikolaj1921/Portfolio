//main server
require('dotenv').config(); // Wczytanie zmiennych środowiskowych z pliku .env
const cors = require('cors');
const express = require('express'); // Importujemy Express
const app = express();             // Tworzymy instancję aplikacji
const contactRoute = require('./routes/contact');

const allowedOrigins = [
  'http://localhost:3000',  // Twoja aplikacja frontendowa (zmień na odpowiednią domenę)
  'http://localhost:5000',  // Serwer backendowy
  // Dodaj inne domeny, które mogą się łączyć z serwerem
];


// Middleware do CORS
app.use(cors({
  origin: (origin, callback) => {
      // Zezwól na żądania z dozwolonych originów lub bez origin (Postman itp.)
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Nieautoryzowany origin: ' + origin));
      }
  },
  methods: ["GET", "POST"], // Dozwolone metody HTTP
  credentials: true // Umożliwia przesyłanie ciasteczek lub nagłówków autoryzacyjnych
}));

// Logowanie żądań (przydatne do debugowania)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware do obsługi JSON
app.use(express.json());




//Endpoints

// Prosta trasa
app.get('/', (req, res) => {
  res.send('Witaj na backendzie Node.js!');
});

//trasa do kontaktu
app.use('/contact', contactRoute); 




//Errors

// Obsługa błędów dla nieznanych tras (404)
app.use((req, res) => {
  res.status(404).json({ error: "Nie znaleziono zasobu" });
});

// Logowanie błędów serwera (500)
app.use((err, req, res, next) => {
  console.error("Błąd serwera:", err.stack);
  res.status(500).json({ error: "Wewnętrzny błąd serwera" });
});


//RUN SERVER

// Uruchomienie serwera
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
