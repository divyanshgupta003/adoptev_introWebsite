const Customer = require('../models/Customer');
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

module.exports.enquiry = async (req,res) =>{
    try{
        let newEnquiry = await Customer.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            userType : req.body.userType,
            company : req.body.company,
            jobTitle : req.body.position,
            message : req.body.enquiry
        });
        console.log(newEnquiry);
        if(req.xhr){
            return res.status(200).json({
                message : "Our Team will Contact You Soon"
            });
        }
        return res.redirect('back');
    }catch(err){
        return console.log('error in storong the enquiry' , err);
    }
}

module.exports.blog = (req , res)=>{
    // request('www.googleapis.com/blogger/v3/blogs/4571718800035017301/posts/2490284876532607526?key=AIzaSyB6w3qeKndp3jczGaHRxSpzgWZ3ve9YUWM', { json: true }, (err, res, body) =>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     console.log(body.kind);
    // });
    axios.get('www.googleapis.com/blogger/v3/blogs/4571718800035017301/posts/2490284876532607526?key=AIzaSyB6w3qeKndp3jczGaHRxSpzgWZ3ve9YUWM')
        .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    });

}