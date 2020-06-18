const mongoose = require('mongoose');

const LogisticsCompleted = new mongoose.Schema({
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
    accepted : {
        type : Boolean,
    },
    rejected : {
        type : Boolean
    }
})

module.exports = mongoose.model('LogisitcsCompleted' , LogisticsCompleted);