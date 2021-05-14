const router = require('express').Router();
const { profileSeed } = require('../../seeds/profileSeed');

router.post('/', async (req, res) => {
  try {
    const newProject = await profileSeed.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        city: req.body.city,
        dob: req.body.dob,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;