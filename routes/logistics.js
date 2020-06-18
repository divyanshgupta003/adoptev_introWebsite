const express = require('express');
const router = express.Router();
const logisticsController = require('../controllers/logistics_controller');

router.post('/push-request' , logisticsController.pushRequest);
router.use('/admin' , require('./admin'));
router.post('/accept-request' , logisticsController.acceptRequest);
router.post('/reject-request' , logisticsController.rejectRequest);

module.exports = router;