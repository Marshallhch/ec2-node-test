const router = require('express').Router();
const topProductsRoute = require('../controllers/topProductsController');

router.get('/topProducts', topProductsRoute.getTopProducts);

module.exports = router;
