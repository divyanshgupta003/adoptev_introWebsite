const customerContact = require('../models/customerContact');
const EnterpriseForm = require('../models/Enterprise');
const PartnerUsForm = require('../models/Partner');

module.exports.enquiry = async (req,res) =>{
    try{
        let newEnquiry = await customerContact.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            // userType : req.body.userType,
            // company : req.body.company,
            // jobTitle : req.body.position,
            message : req.body.enquiry
        });
        // console.log(newEnquiry);
        if(req.xhr){
            return res.status(200).json({
                message : "Our Team will Contact You Soon"
            });
        }
        return res.redirect('back');
    }catch(err){
        return res.redirect('back');
    }
}

module.exports.enterpriseForm = async (req,res)=>{
    try{
         
        let newEnquiry = await EnterpriseForm.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            companyName : req.body.companyName,
            companyLocation : req.body.companyLocation,
            message : req.body.message
        });
        if(req.xhr){
            return res.status(200).json({
                message : "Our Team will Contact You Soon"
            });
        }
        return res.redirect('back');
    }
    catch(err){
        return res.redirect('back');
    }
}

module.exports.partnerUsForm = async (req,res)=>{
    try{
         
        let newEnquiry = await PartnerUsForm.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            companyName : req.body.companyName,
            partnerType : req.body.partnerType,
            message : req.body.message
        });
        if(req.xhr){
            return res.status(200).json({
                message : "Our Team will Contact You Soon"
            });
        }
        return res.redirect('back');
    }
    catch(err){
        return res.redirect('back');
    }
}