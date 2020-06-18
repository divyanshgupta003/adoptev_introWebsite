const User = require("../models/User")

module.exports.login = (req , res)=>{
    return res.render('users-log-in' , {
        title : 'AdoptEV | Log In'
    })
}

module.exports.signUp = (req,res)=>{
    return res.render('users-sign-up' , {
        title : 'AdoptEV | Sign Up'
    })
}

module.exports.createSession = (req,res)=>{
    console.log('in createsession block');
    
    return res.redirect('/');
}

module.exports.creatUser = async (req,res)=>{
    try{
        if(req.body.password != req.body.confirmPassword){
            return res.redirect('back');
        }
        let user = await User.findOne({email : req.body.email});
        if(!user){
            let newUser = await User.create({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            })
            return res.redirect('/users/login');
        }
        console.log('user already exists');
        return res.redirect('/users/login');
    }catch(error){
        return console.log(error);
    }
}

module.exports.destroySession = async (req,res)=>{
    req.logout();
    return res.redirect('/');
}

module.exports.dashboard = async (req,res)=>{
    try{
        if(!req.user){
            return res.redirect('/users/signup')
        }
        let user = await User.findById(req.user._id);
        user = await user.populate('requests').execPopulate();
        res.render('dashboard' , {
            title : 'AdoptEV || Dashboard',
            requests : user.requests
        })
    }catch(err){
        return console.log(err);
        
    }
}