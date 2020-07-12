const express = require('express');
const port = 8000;
const mongoose = require('mongoose');
const keys = require('./keys');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = mongoose.connection;

//expressLayouts
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//Encoding the url text 
app.use(express.urlencoded());

//setting the static folder
app.use(express.static('./public/assets'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//connecting the routes folder
app.use('/' , require('./routes/index'));

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

