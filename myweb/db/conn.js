
const mongoose = require('mongoose');
const detail = require('../src/models/naventry');
mongoose.connect('mongodb://localhost:27017/myfun',{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log("Connection Successful.."))
.catch((err)=>console.log(err));

mongoose.set('strictQuery', true);

// detail.create({
//     BrandName:"jaydip",
//     BrandIconURL:"hfshb//fnjs.com",
//     links:[
//         {
//             label:"home",
//             URL:"/"
//         },
//         {
//             label:"link",
//             URL:"/#link"
//         },
//         {
//             label:"services",
//             URL:"/#services"
//         },
//         {
//             label:"gallary",
//             URL:"/#gallary"
//         },
//         {
//             label:"about",
//             URL:"/#about"
//         },
//         {
//             label:"contact us",
//             URL:"/#contact us"
//         },
//     ]
// })