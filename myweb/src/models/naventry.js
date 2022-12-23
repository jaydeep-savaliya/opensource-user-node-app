const mongoose = require('mongoose');

const detail = new mongoose.Schema({
    BrandName:String,
    BrandIconURL:String,
    links:[
        {
        label:String,
        URL:String
    },
],
});

module.exports = mongoose.model('navdetail',detail);