const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

const eventController = require('./eventController');
const profileController = require('./profileController');
const profeve = require('./profeveController');

router.use('eventController', eventController);
router.use('profileController', profileController);
router.use('profeve', profeve);

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
