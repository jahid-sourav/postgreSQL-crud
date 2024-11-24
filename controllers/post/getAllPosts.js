const pool = require("../../config/database");

const getAllPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllPosts };
