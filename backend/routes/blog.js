const express = require('express');
const pool = require('../db');
const router = express.Router();

//method get from data db
router.get('/dataget', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM post');
    res.json(result.rows);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Error DB' });
  }
});

router.post('/datapost', async (req, res) => {
  try {
    const { opis } = req.body;

    // check data
    if (!opis) {
      return res.status(400).json({ error: 'None data' });
    }

    // create connect to send data
    const query = `INSERT INTO post (opis) VALUES ($1) RETURNING *`;
    const values = [opis];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error add post blog:', error);
    res.status(500).json({ error: 'Error DB' });
  }
});

module.exports = router;
