const express = require('express');
const router = express.Router();

const formController = require('../controllers/forms_controller');

router.post('/enquiry' , formController.enquiry);
router.post('/enterprise-form' , formController.enterpriseForm);
router.post('/partner-us-form' , formController.partnerUsForm);

module.exports = router;