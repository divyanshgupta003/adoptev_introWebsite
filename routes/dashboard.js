const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboard');


router.get('/contactus' , dashboardController.contactus);
router.get('/partnerus' , dashboardController.partnerus);
router.get('/enterprises' , dashboardController.enterprises);

module.exports = router;