const mongoose = require('mongoose');

const EnterpriseFormSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    companyName : {
        type : String
    },
    companyLocation : {
        type : String
    },
    message : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('EnterpriseFormSchema' , EnterpriseFormSchema);