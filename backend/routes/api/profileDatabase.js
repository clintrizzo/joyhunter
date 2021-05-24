const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const { Profile, Airsoft, Paintball } = require("../../models");

router.route("/").get(profileController.eventLists);



router.get("/:id", async (req, res) => {
  try {
    const dbUser = await Profile.findOne({
      where: {
        id: req.params.id,
      },
    });

    // console.log(dbUser.dataValues.event_id.split(' '))
    
    res.status(200).json(dbUser);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const profileData = await Profile.create(req.body);
    res.status(200).json(profileData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.route("/reserve").post(profileController.reserve);

module.exports = router;
