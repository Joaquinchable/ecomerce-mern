const express = require('express');
const router = express.Router();


// Add the required routes
router.use('/products', require('./Products'));
router.use('/reviews', require('./Reviews'));
router.use('/users', require('./Users'));
router.use('/orders', require('./Orders'));


module.exports = router;