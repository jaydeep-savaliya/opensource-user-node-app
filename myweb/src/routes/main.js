const express = require("express");
const routes = express.Router();
const mongoose = require('mongoose');
const detail = require('../models/naventry');
require('../../db/conn');

routes.get('/',async(req,res)=>{
    const data=await detail.findOne({"_id":"63a58bf8e1546724328997f2"});
    // console.log(data);
    res.render('index',{detail:data});
});

routes.get('/gallary',async(req,res)=>{
    const data=await detail.findOne({"_id":"63a58bf8e1546724328997f2"});
    res.render('gallary',{detail:data});
});


module.exports = routes;