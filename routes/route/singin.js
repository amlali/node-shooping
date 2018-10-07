var Router = require('express').Router();
var accessContr=require('./../../controllers/signin');
Router.route('/signIn').post(accessContr.signIn());

module.exports = Router;