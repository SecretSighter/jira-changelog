/**
 * ReleasedocController
 *
 * @description :: Server-side logic for managing releasedocs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'gather' : function(req, res) {

		var http = require('http');

		var options = {
		  hostname: 'www.google.com',
		  port: 80,
		  path: '/upload',
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/x-www-form-urlencoded'
		  }
		};

		var theBody = "";

		var myreq = http.request(options, function(myres) {
		  console.log('STATUS: ' + myres.statusCode);
		  console.log('HEADERS: ' + JSON.stringify(myres.headers));


		  myres.setEncoding('utf8');
		  myres.on('data', function (chunk) {
		    console.log('BODY: ' + chunk);
				theBody += chunk;
		  });

			myres.on('end', function(){
				res.send(theBody)
			});

		}).end();

	}
};
