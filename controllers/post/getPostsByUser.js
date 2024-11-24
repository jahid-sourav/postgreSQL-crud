const pool = require("../../config/database");

const getPostsByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    // Fetch user's posts
    const result = await pool.query(
      `SELECT users.id AS user_id, users.name AS user_name, users.email, posts.id AS post_id, posts.title, posts.content
       FROM users
       LEFT JOIN posts ON users.id = posts.user_id
       WHERE users.id = $1`,
      [userId]
    );

    if (result.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "User not found or no posts available." });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getPostsByUser };
