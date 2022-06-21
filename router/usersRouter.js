// external imports
const express = require("express");

// internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const { addUserValidators } = require("../middleware/users/userValidators");
const avatarUpload = require("../middleware/users/avatarUpload");

const router = express.Router();

// users page
router.get("/users", decorateHtmlResponse("Users"), getUsers);

// add user
router.post("/", avatarUpload, addUserValidators);

module.exports = router;
