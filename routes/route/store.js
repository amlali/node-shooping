var Router = require('express').Router();
var accessContr=require('./../../controllers/store');
var access=require('./../../controllers/token');
Router.route('/store').post(access.access,accessContr.Store());

module.exports = Router;