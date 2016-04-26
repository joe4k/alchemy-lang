/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

//JK add bodyParser
var bodyParser = require('body-parser');
// JK the following code is needed to be able
// to capture input from form data
app.use(bodyParser.urlencoded({
        extended: true
        })
);
app.use(bodyParser.json());

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var watson = require('./watson/watson.js');
app.post('/keywords', function (req, res) {
        watson.getKeywords(req, function(err,response) {
                if(err) {
                 return err
                 }
		res.send(response.keywords);
	})
});


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
