require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRoutes");
const profileRouter = require("./routes/profileRoutes");
const postRouter = require("./routes/postRoutes");
const pool = require("./config/database");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Routes
// Users Route
app.use("/users", userRouter);

// Profiles Route
app.use("/profiles", profileRouter);

// Posts Route
app.use("/posts", postRouter);

// LEFT JOIN Example
app.get("/getInfo/:user_id", async (req, res) => {
  const { user_id } = req.params;

  try {
    // Join users and profiles table to get full user data
    const result = await pool.query(
      `SELECT users.id, users.name, users.email, profiles.bio 
       FROM users 
       LEFT JOIN profiles ON users.id = profiles.user_id 
       WHERE users.id = $1`,
      [user_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user's full data
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
