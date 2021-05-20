const router = require("express").Router();

// Event DB
const airsoftDatabase = require("./airsoftDatabase");
const paintballDatabase = require("./paintballDatabase");
const profileDatabase = require("./profileDatabase");



router.use("/airsoft", airsoftDatabase);
router.use("/paintball", paintballDatabase);
router.use("/profiles", profileDatabase);


module.exports = router;