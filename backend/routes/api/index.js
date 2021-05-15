const router = require("express").Router();

// Event DB
const eventDatabase = require("./eventDatabase");

router.use("/events", eventDatabase);

module.exports = router;