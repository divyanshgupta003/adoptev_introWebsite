const express = require('express');
const router = express.Router();
const logisticsController = require('../controllers/logistics_controller');

router.get('/7867' , logisticsController.admin);
router.post('/send-price' , logisticsController.sendPrice);

module.exports = router;