const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        // required : true
    },
    companyName : {
        type : String,
        // required : true
    },
    companyLocation : { 
        type : String,
        // required : true
    },
    pincode : {
        type : Number,
        // required : true
    },
    city : {
        type : String,
        // required : true
    },
    State : {
        type : String,
        // required : true
    },
    requests : [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'LogiticsRequest'
        }
    ],
    completed : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'LogisitcsCompleted'
        }
    ]
},{
    timestamps : true
});

module.exports = mongoose.model('User' , userSchema);