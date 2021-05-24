const router = require("express").Router();
const airsoftController = require("../../controllers/airsoftController");

const { Profile, Airsoft, Paintball } = require("../../models");


router.route("/")
.get(airsoftController.eventLists);

router.get("/:id", async (req, res) => {
  try {
    const dbUser = await Airsoft.findOne({
      where: {
        id: req.params.id,
      },
    });


    
    res.status(200).json(dbUser);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});



// router.get('/', async (req, res) => {
//   try {
//     const airsoftData = await airsoft.findAll();
//     res.status(200).json(airsoftData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// router.get('/:id', async (req, res) => {
//   try {
//     const airsoftData = await airsoft.findByPk(req.params.id, {
     
//       include: [{ model: Paintball, through: profile, as: 'reserved_event' }]
//     });

//     if (!airsoftData) {
//       res.status(404).json({ message: 'No airsoft found with this id!' });
//       return;
//     }

//     res.status(200).json(airsoftData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// router.post('/', async (req, res) => {
//   try {
//     const airsoftData = await airsoft.create(req.body);
//     res.status(200).json(airsoftData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


module.exports = router;
