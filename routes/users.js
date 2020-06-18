const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users_controllers');
const passport = require('passport');

router.get('/login' , usersControllers.login);
router.get('/signUp' , usersControllers.signUp);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/login'},
) , usersControllers.createSession);
router.post ('/create-user' , usersControllers.creatUser);
router.get('/signout' , passport.checkAuthentication ,usersControllers.destroySession);
router.get('/dashboard' , usersControllers.dashboard);

module.exports = router;