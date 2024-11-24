const router = require("express").Router();
const { createPost } = require("../controllers/post/createPost");
const { getAllPosts } = require("../controllers/post/getAllPosts");
const { getPostsByUser } = require("../controllers/post/getPostsByUser");

// Create Post
router
  .post("/", createPost)

  // Get All Posts
  .get("/", getAllPosts)

  // Get Posts By User
  .get("/:userId", getPostsByUser);

module.exports = router;
