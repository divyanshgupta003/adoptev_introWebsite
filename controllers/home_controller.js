const Customer = require('../models/Customer');

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
        
        if(req.xhr){
            console.log('hello here');
            return res.status(200).json({
                message : "Our Team will Contact You Soon"
            });
        }
        
    }catch(err){
        return console.log('error in storong the enquiry' , err);
    }
}