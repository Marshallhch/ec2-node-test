const database = require('../services/database');

exports.getVolumeServices = async (req, res) => {
  try {
    const result = await database.pool.query('SELECT * FROM volume_services');
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};