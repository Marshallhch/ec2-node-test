const router = require('express').Router();
const totalRevenueRoute = require('../controllers/totalRevenueController');

router.get('/revenue', totalRevenueRoute.getRevenue);

module.exports = router;
