const router = require("express").Router();
const profeveController = require("../../controllers/profeveController");

router
  .route("/")
  .get(profeveController.eventLists)

  module.exports = router;