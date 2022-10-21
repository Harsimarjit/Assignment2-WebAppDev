let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const contact = require('../models/contact');

let passport = require('passport');
//Guard Funtion
function requireAuth(req,res,next) {
    //checking if the user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}


//connecting to contact model
//let Contact = require("../models/contact");

let contactController = require('../controllers/contact');

//Get route for the Contact List Page - Read OP

router.get ('/',requireAuth, contactController.displayContactList);

//Get route for displaying Add page - Create operation
router.get('/add',requireAuth,contactController.displayAddPage);

//Post route for processing Add page - Create operation
router.post('/add',requireAuth,contactController.processAddPage);
//Get route for displaying Edit page - Update operation
router.get('/edit/:id',requireAuth,contactController.displayEditPage);
//Post route for processing Edit page - Update operation
router.post('/edit/:id',requireAuth,contactController.processEditPage);
//Get to perform te Deletion - Delete operation
router.get('/delete/:id',requireAuth,contactController.performDelete);


module.exports = router;