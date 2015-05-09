/**
 * ReleasedocController
 *
 * @description :: Server-side logic for managing releasedocs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'gather' : function(req, res) {
		// var postData = querystring.stringify({
		//   'msg' : 'Hello World!'
		// });

		var http = require('http');
		var options = {
		  hostname: 'www.google.com',
		  port: 80,
		  path: '/upload',
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/x-www-form-urlencoded'
		    // 'Content-Length': postData.length
		  }
		};

		var message = "";

		var myreq = http.request(options, function(myres) {
		  console.log('STATUS: ' + myres.statusCode);
		  console.log('HEADERS: ' + JSON.stringify(myres.headers));
			message = JSON.stringify(myres.headers);
		  myres.setEncoding('utf8');
		  myres.on('data', function (chunk) {
		    // console.log('BODY: ' + chunk);
				res.send(chunk);
		  });
		});

		// myreq.on('error', function(e) {
		//   console.log('problem with request: ' + e.message);
		// });

		// write data to request body
		//myreq.write(postData);
		// myreq.end();


	}
};
