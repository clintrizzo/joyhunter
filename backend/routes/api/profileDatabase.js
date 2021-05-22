  const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const { Profile,Airsoft,Paintball } = require('../../models');

router.route("/")
  .get(profileController.eventLists)

router.get('/', async (req, res) => {
  Profile.findAll({
    include: [Airsoft, Paintball],
  })
  .then((profiles) => res.json(profiles))
  .catch((err) => res.status(500).json(err));
})

router.get('/:id', async (req,res) => {
Profile.findOne({
  where: {
    id: req.params.id,
  },
  include: [Airsoft,Paintball],
})
.then((profiles) => res.json(profiles))
.catch((err) => res.status(500).json(err));

})

  router.post('/', async (req, res) => {
    try {
      const profileData = await Profile.create(req.body);
      res.status(200).json(profileData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.route('/reserve')
  .post(profileController.reserve)
  
  module.exports = router;





