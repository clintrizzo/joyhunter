  
const router = require('express').Router();


const airsoftController = require('./airsoftController');
const paintballController = require('./paintballController');
const profileController = require('./profileController');


router.use('airsoftController', airsoftController);
router.use('paintballController', paintballController);
router.use('profileController', profileController);



module.exports = router;