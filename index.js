const express = require('express');
const port = 8000;
const mongoose = require('mongoose');
const keys = require('./keys');
const app = express();

//Encoding the url text 
app.use(express.urlencoded());

//setting the static folder
app.use(express.static('./assets'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//connecting the routes folder
app.use('/' , require('./routes/index'));

//connecting the mongoDB
// mongoose.connect(keys.mongouri , {
//     // useUnifiedTopology : true,
//     useNewUrlParser : true
// }, (err)=>{
//     if(err){
//         console.log(`error in connecting database` , err);
//         return;
//     }
//     console.log('connected to the database');

//     app.listen(port , (err)=>{
//         if(err){
//             console.log('error in starting server' , err);
//             return;
//         }
//         console.log(`Server running fine at ${port}`);
//     })
// })
mongoose.connect(keys.mongouri , {  useNewUrlParser : true,
    useUnifiedTopology : true
},
   function(err){
    if(err){
        console.log(err);
        return;
    }
    
    console.log('database working');

    app.listen(port , function(err){
        if(err){
            console.log(err);
            return;
        }
        console.log('Port running fine on ' + port);
    });
    
});

