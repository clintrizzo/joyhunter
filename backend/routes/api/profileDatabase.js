const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router.route("/profiles")
.get(profileController.profileLists);