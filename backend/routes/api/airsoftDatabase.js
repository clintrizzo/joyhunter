const router = require("express").Router();
const airsoftController = require("../../controllers/airsoftController");


router.route("/")
.get(airsoftController.eventLists);
module.exports = router;