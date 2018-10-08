var Router = require('express').Router();
var accessContr=require('./../../controllers/store');
Router.route('/store').post(accessContr.Store());

module.exports = Router;