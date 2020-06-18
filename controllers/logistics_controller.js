const LogisticsRequest = require('../models/LogisticRequest');
const User = require('../models/User');
const LogisiticsProcessed = require('../models/LogisiticsProcessed');
const { create } = require('../models/LogisticRequest');

module.exports.pushRequest = async (req,res)=>{
    try{
        if(!req.user){
            res.redirect('/users/login')
        }
        const newRequest = await LogisticsRequest.create({
            customer : req.user.id,
            startingAddress : req.body.startingAddress,
            designationAddress : req.body.designationAddress,
            load : req.body.load,
            status : 'process'
        })
        const user = await User.findById(req.user._id);
        user.requests.push(newRequest);
        user.save();
        return res.redirect('back');
    }catch(err){
        console.log(err);
        return;
    }
}

module.exports.admin = async (req,res)=>{
    try{
        if(!req.user || req.user.email !== 'a@a.com' || req.user.password !== '1'){
            return res.redirect('/users/dashboard');
        }
        const allRequests = await LogisticsRequest.find({})
                                .populate('customer');
        // console.log(allRequests);
        

        return res.render('adminPage' , {
            title : 'Admin Page',
            allRequests : allRequests
        })
    }catch(err){
        return console.log(err);
    }
}

module.exports.sendPrice = async (req,res)=>{
    try{
        if(!req.user || req.user.email !== 'a@a.com' || req.user.password !== '1'){
            return res.redirect('/users/dashboard');
        }
        const request = await LogisticsRequest.findById(req.body.requestId);
        request.price = req.body.price;
        request.save();
        console.log(request.price);
        return res.redirect('back');
    }catch(err){
        return console.log(err);
    }
}

module.exports.acceptRequest = async (req,res)=>{
    try{
        if(!req.user){
            return res.redirect('back');
        }
        const request = await LogisticsRequest.findById(req.body.requestId);
        if(req.user.id !== request.customer.toString()){
            
            return res.redirect('back');
        }
        const processedRequest = await LogisiticsProcessed.create({
            customer : request.customer,
            startingAddress : request.startingAddress,
            designationAddress : request.designationAddress,
            load : request.load,
            accepted : true,
            rejected : false 
        });
        console.log(processedRequest);
        
        let user = await User.findByIdAndUpdate(req.user.id, {$pull : { requests : req.body.requestId}});
        await request.remove();
        await user.completed.push(processedRequest);
        await user.save();
        return res.redirect('back');
    
    }catch(err){
        return console.log(err);
    }
}

module.exports.rejectRequest = async (req,res)=>{
    try{
        if(!req.user){
            return res.redirect('back');
        }
        const request = await LogisticsRequest.findById(req.body.requestId);
        if(JSON.stringify(req.user._id) !== JSON.stringify(request.customer)){
            
            return res.redirect('back');
        }
        const processedRequest = await LogisiticsProcessed.create({
            customer : request.customer,
            startingAddress : request.startingAddress,
            designationAddress : request.designationAddress,
            load : request.load,
            accepted : false,
            rejected : true 
        });
        let user = await User.findByIdAndUpdate(req.user.id, {$pull : { requests : req.body.requestId}});
        await request.remove();
        await user.completed.push(processedRequest);
        await user.save();
        return res.redirect('back');
    
    }catch(err){
        return console.log(err);
    }
}