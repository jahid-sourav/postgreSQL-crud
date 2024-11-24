const pool = require("../../config/database");

// Create a post for a user
const createPost = async (req, res) => {
  const { userId, title, content } = req.body;

  try {
    // Check if the user exists
    const userResult = await pool.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Insert the post
    const postResult = await pool.query(
      "INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, userId]
    );
    res.status(201).json(postResult.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createPost };
