const router = require("express").Router();
const eventController = require("../../controllers/eventController");


router.route("/events")
.get(eventController.eventLists);