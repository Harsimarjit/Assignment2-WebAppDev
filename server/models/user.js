//require models for the User model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
const { collection } = require('./contact');

let User = mongoose.Schema
(
    {
        username:
        {
            type:String,
            default: "",
            trim: true,
            required : 'username is required'
        },
        /*
        password
        {
            same as above just password[not needed]
        }
        */
        email:
        {
            type:String,
            default: "",
            trim: true,
            required : 'email address is required'
        },
        displayName:
        {
            type:String,
            default: "",
            trim: true,
            required : 'Display Name is required'
        }
    },
    {
        collection:"users"
    }
);

//configure options for user model
let options = ({missingPasswordError: 'Wrong/Missing password'});

User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User',User);