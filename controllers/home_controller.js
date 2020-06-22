const customerContact = require('../models/customerContact');
const request = require('request');
const axios = require('axios');


module.exports.homePage = async (req , res) => {
    res.render('index' , {
        title : 'Home Page'
    });
}

module.exports.errorPage = async (req , res) => {
    res.render('404' , {
        title : 'Error Page'
    })
}


module.exports.contactUs = (req,res)=>{
    return res.render('contact' , {
        title : 'Contact Us'
    })
}

module.exports.aboutUs = (req , res)=>{
    return res.render('aboutUs' , {
        title : 'About Us'
    })
}

module.exports.career = (req,res)=>{
    return res.render('career' , {
        title : "Career"
    })
}

module.exports.partner = (req,res)=>{
    return res.render('partnerUs' , {
        title : "Partner Us"
    })
}

module.exports.enterprise = (req,res)=>{
    return res.render('enterprise' , {
        title : "Our Enterprise"
    })
}