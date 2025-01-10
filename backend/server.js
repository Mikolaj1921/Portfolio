const express = require('express'); // Importujemy Express
const app = express();             // Tworzymy instancję aplikacji

// Middleware do obsługi JSON
app.use(express.json());

// Prosta trasa
app.get('/', (req, res) => {
  res.send('Witaj na backendzie Node.js!');
});

// Uruchomienie serwera
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
