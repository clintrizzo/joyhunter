const router = require("express").Router();
const profeveController = require("../../controllers/profeveController");

router.route("/profeves")
.get(profeveController.profeveLists);