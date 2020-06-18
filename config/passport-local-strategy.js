const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField : 'email'
},(email , password , done)=>{
    User.findOne({email : email} , (err , user)=>{
        if(err){
            return done(err);
        }
        if(!user || user.password != password){
            return done(null , false);
        }
        return done(null , user);
    })
    }
))
passport.serializeUser((user , done)=>{
    done(null , user.id);
})

passport.deserializeUser((id , done)=>{
    User.findById(id, (err , user)=>{
        if(err){
            console.log('error in finding user');
            return;
        }
        return done(null , user);
    })
})
passport.checkAuthentication = (req , res , next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/login');
}

passport.setAuthenticatedUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;