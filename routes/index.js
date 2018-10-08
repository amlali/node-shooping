
 var signup  = require('./route/signup');
 var signin  = require('./route/singin');
 var load  = require('./route/load');
 var store  = require('./route/store');
module.exports = function (app) {

    //routes that with no namespace 
	app.use( signup);
    app.use( signin);
    app.use( load);
    app.use( store);
}