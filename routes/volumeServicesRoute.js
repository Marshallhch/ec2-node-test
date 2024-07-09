const router = require('express').Router();
const volumeServicesController = require('../controllers/volumeServicesController');

router.get('/volumeServices', volumeServicesController.getVolumeServices);

module.exports = router;