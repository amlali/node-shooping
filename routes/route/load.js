var Router = require('express').Router();
var accessContr=require('./../../controllers/load');
Router.route('/load').get(accessContr.Load());

module.exports = Router;