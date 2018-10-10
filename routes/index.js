
 var signup  = require('./route/signup');
 var signin  = require('./route/singin');
 var load  = require('./route/load');
 var store  = require('./route/store');
 var access  = require('./../controllers/access');

module.exports = function (app) {

    //routes that with no namespace 
  //  app.use( access);
	app.use( signup);
    app.use( signin);
    app.use( load);
    app.use( store);
}