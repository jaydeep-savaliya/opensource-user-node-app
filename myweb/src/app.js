const express = require('express');
const app = express();
const port = process.env.PORT | 3000;
const hbs = require('hbs');
const path = require('path');
const {default:mongoose} = require('mongoose');
const routes = require('./routes/main');
const viewspath = path.join(__dirname,'../src/templates/views');
const partials_path = path.join(__dirname,'../src/templates/partials');
const detail = require('./models/naventry');
require('../db/conn');

app.set('view engine','hbs');
app.set('views',viewspath);
hbs.registerPartials(partials_path);

// app.use(express.static(''))
app.use('',routes);

app.listen(port,(err)=>{
    console.log(`Server Running at ${port}`);
})