var Router = require('express').Router();
var accessContr=require('./../../controllers/load');
Router.route('/load').post(accessContr.Load());

module.exports = Router;