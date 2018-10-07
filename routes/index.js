
 var signup  = require('./route/signup');
 var signin  = require('./route/singin');
module.exports = function (app) {

	

   
  

    //routes that has namespace 
	app.use( signup);
    app.use( signin);
}