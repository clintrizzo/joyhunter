const router = require('express').Router();
const profileRoutes = require('./profileRoutes');
// const eventRoutes = require('./eventRoutes');

router.use('/profile', profileRoutes);
// router.use('/event', eventRoutes);

module.exports = router;
