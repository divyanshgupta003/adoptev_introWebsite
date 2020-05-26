const express = require('express');
const port = 8000;
const app = express();

//setting the static folder
app.use(express.static('./assets'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//connecting the routes folder
app.use('/' , require('./routes/index'));

app.listen(port , (err)=>{
    if(err){
        console.log('error in starting server' , err);
    }
    console.log(`Server running fine at ${port}`);
})