const router = require('express').Router();
const customerRoute = require('../controllers/customerController');

router.get('/customers', customerRoute.getCustomers);

module.exports = router;
