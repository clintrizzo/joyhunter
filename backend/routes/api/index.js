const router = require("express").Router();

// Event DB
const eventDatabase = require("./eventDatabase");
const profileDatabase = require("./profileDatabase");
const profeveDatabase = require("./profeveDatabase");


router.use("/events", eventDatabase);
router.use("/profiles", profileDatabase);
router.use("/profeves", profeveDatabase);

module.exports = router;