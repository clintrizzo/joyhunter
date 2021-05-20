  
const router = require("express").Router();
const profileController = require("../../controllers/profileController");

router
  .route("/")
  .get(profileController.eventLists)
  module.exports = router;





