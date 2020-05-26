const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/' , homeController.homePage);
router.post('/enquiry' , homeController.enquiry);

router.use('/' , homeController.errorPage);

module.exports = router;