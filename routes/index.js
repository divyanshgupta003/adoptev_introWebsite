const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/' , homeController.homePage);
// router.get('/contactus' , homeController.contactUs);
// router.get('/aboutus' , homeController.aboutUs);
// router.get('/career' , homeController.career);
router.get('/partnerus' , homeController.partner);
router.get('/enterprise' , homeController.enterprise);
router.use('/form' , require('./form'));
router.use('/fd2a6788b6e37c7adad0aa/admin' , require('./dashboard'))

router.use('/' , homeController.errorPage);


module.exports = router;