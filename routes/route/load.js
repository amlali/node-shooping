var Router = require('express').Router();
var accessContr=require('./../../controllers/load');
var access=require('./../../controllers/access');
Router.route('/load').post(access.access,accessContr.Load());

module.exports = Router;