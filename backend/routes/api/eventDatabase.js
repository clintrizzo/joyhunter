const router = require("express").Router();
const eventController = require("../../controllers/eventController");


router.route("/")
.get(eventController.eventLists);
module.exports = router;