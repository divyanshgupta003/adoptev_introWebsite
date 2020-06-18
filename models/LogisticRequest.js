const mongoose = require('mongoose');

const LogiticsRequestSchema = new mongoose.Schema({
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    startingAddress : {
        type : String,
        required : true
    },
    designationAddress : {
        type : String,
        required : true
    },
    load : {
        type : String,
        required : true
    },
    price : {
        type : Number,
    },
    status : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('LogiticsRequest' , LogiticsRequestSchema);