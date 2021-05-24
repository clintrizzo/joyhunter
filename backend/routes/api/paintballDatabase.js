const router = require("express").Router();
const paintballController = require("../../controllers/paintballController");
const { Profile, Airsoft, Paintball } = require("../../models");




router.route("/")
.get(paintballController.eventLists);



router.get("/:id", async (req, res) => {
  try {
    const dbUser = await Paintball.findOne({
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
// router.get('/', async (req, res) => {
//   try {
//     const paintballData = await paintball.findAll();
//     res.status(200).json(paintballData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// router.get('/:id', async (req, res) => {
//   try {
//     const paintballData = await paintball.findByPk(req.params.id, {
     
//       include: [{ model: Paintball, through: profile, as: 'reserved_event' }]
//     });

//     if (!paintballData) {
//       res.status(404).json({ message: 'No paintball found with this id!' });
//       return;
//     }

//     res.status(200).json(paintballData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



// router.post('/', async (req, res) => {
//   try {
//     const paintballData = await paintball.create(req.body);
//     res.status(200).json(paintballData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;