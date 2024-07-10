const router = require('express').Router();
const targetRealityRoute = require('../controllers/targetRealityController');

router.get('/targetReality', targetRealityRoute.getTargetReality);

module.exports = router;
