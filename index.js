const express = require('express');
const port = 8000;
const mongoose = require('mongoose');
const keys = require('./keys');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);
const db = mongoose.connection;

//expressLayouts
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//Encoding the url text 
app.use(express.urlencoded());

//setting the static folder
app.use(express.static('./assets'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//setting the cookie and encoding it with a key
app.use(session({
    name : 'AdoptEV',
    secret : 'hello@123',
    resolve : false,
    cookie : {
        maxAge : (1000 * 60 * 60 * 24 * 5)
    },
    saveUninitialized : false,
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
    // store : new MongoStore({
    //     mongooseConnection : db,
    //     autoRemove : 'disabled'
    // } , (err)=>{
    //     return console.log('error in connect mongo setup ' + err);
    // })
}))
app.use(passport.initialize());
app.use(passport.session());
//setting up the authenticated user 
app.use(passport.setAuthenticatedUser);


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

