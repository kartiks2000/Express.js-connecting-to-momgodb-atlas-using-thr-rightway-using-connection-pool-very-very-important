const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const mongoconnect = require('./database').mongoconnect;

const app = express();
console.log("*******************************************************************"); 

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views','views');

const userroutes = require('./routes/userroutes');
const adminroutes = require('./routes/adminroutes');

app.use(userroutes);
app.use(adminroutes);



mongoconnect(()=>{
    app.listen(3000);
});