let mongoose = require('mongoose');

//creating a model class
let contactModel = mongoose.Schema({
    name:String,
    num:String,
    email:String
},
{
    collection:"contacts"
});

module.exports = mongoose.model('Contact',contactModel);
