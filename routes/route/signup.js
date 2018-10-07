var Router = require('express').Router();
var accessContr=require('./../../controllers/signup');
Router.route('/signUp').post(accessContr.signUp());

module.exports = Router;