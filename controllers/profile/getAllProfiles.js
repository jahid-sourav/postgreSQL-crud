const pool = require("../../config/database");

const getAllProfiles = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM profiles");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllProfiles };
