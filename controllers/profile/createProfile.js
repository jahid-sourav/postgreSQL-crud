const pool = require("../../config/database");

exports.createProfile = async (req, res) => {
  const { userId, bio } = req.body;
  try {
    // Check if the user exists
    const userResult = await pool.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create profile
    const profileResult = await pool.query(
      "INSERT INTO profiles (bio, user_id) VALUES ($1, $2) RETURNING *",
      [bio, userId]
    );
    res.status(201).json(profileResult.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
