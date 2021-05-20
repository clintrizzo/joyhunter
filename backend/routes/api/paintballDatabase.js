const router = require("express").Router();
const paintballController = require("../../controllers/paintballController");


router.route("/")
.get(paintballController.eventLists);
module.exports = router;