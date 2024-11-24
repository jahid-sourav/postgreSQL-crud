const router = require("express").Router();
const { createUser } = require("../controllers/user/createUser");
const { getAllUsers } = require("../controllers/user/getAllUsers");
const { getUserById } = require("../controllers/user/getUserById");
const { updateUser } = require("../controllers/user/updateUser");
const { deleteUser } = require("../controllers/user/deleteUser");

// Create User
router
  .post("/", createUser)

  // Get All Users
  .get("/", getAllUsers)

  // Get Single User by ID
  .get("/:id", getUserById)

  // Update User (PUT method)
  .put("/:id", updateUser)

  // Delete User (DELETE method)
  .delete("/:id", deleteUser);

module.exports = router;
