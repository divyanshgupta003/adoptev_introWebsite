const CustomerContact = require('../models/customerContact');
const Enterprise = require('../models/Enterprise');
const Partner = require('../models/Partner');

module.exports.contactus = async (req,res)=>{
    // if()
    const customerData = await CustomerContact.find({}).limit(30);
    
    res.render('contactus-data' , {
        title : 'Contact Us Dashboard',
        customerData : customerData
    })
}

module.exports.partnerus = async (req,res)=>{
    // if()
    const partnerData = await Partner.find({}).limit(30);
   
    res.render('partner-us-data' , {
        title : 'Partner Us Dashboard',
        partnerData : partnerData
    })
}

module.exports.enterprises = async (req,res)=>{
    // if()
    const enterpriseData = await Enterprise.find({}).limit(30);

    res.render('enterprises-data' , {
        title : 'Enterprises Dashboard',
        enterpriseData : enterpriseData
    })
}