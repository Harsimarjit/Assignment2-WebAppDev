let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connecting to contact model
let Contact = require("../models/contact");

//Get route for the Contact List Page - Read OP

router.get ('/',(req,res,next) => {
    Contact.find((err,contactList) => {
        if(err){
            return console.error(err);
        }
        else{
           console.log(contactList);
           res.render('contact',{title : 'Contact List', ContactList : contactList})
        }
    });
});


module.exports = router;