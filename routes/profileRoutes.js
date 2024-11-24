const router = require("express").Router();
const { createProfile } = require("../controllers/profile/createProfile");
const { getAllProfiles } = require("../controllers/profile/getAllProfiles");
const { getProfileById } = require("../controllers/profile/getProfileById");

// Create Profile
router
  .post("/", createProfile)

  //   Get All Profiles
  .get("/", getAllProfiles)

  //   Get A Profile By ID
  .get("/:id", getProfileById);

module.exports = router;
