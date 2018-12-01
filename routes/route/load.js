var Router = require('express').Router();
var accessContr=require('./../../controllers/load');
var access=require('./../../controllers/token');
Router.route('/load').post(access.access,accessContr.Load());

module.exports = Router;