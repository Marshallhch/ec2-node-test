const router = require('express').Router();
const salesMapRoute = require('../controllers/salesMapController');

router.get('/salesMap', salesMapRoute.getSalesMap);

module.exports = router;
