const express = require('express');
const pool = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM post');
    res.json(result.rows);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Błąd bazy danych' });
  }
});

module.exports = router;
