const express = require('express');
const cors = require('cors');
const app = express();
const { Pool } = require('pg');
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!, This is a simple API to get volume services from a database.');
})

const getVolumeServices = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM volume_services');
    return res.status(200).json(result.rows);
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

app.get('/volumeServices', getVolumeServices);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));