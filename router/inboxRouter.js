// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

// inbox page
router.get("/inbox", decorateHtmlResponse('Inbox'), getInbox);

module.exports = router;
