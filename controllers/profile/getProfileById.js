const pool = require("../../config/database");

// Get Single User by ID
const getProfileById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM profiles WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProfileById };
