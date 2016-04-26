'use strict';

var watson = require('watson-developer-cloud');
var config = require('./config.js');
var alchemy_language = watson.alchemy_language({api_key: config.services.alchemy_api_key});
var request = require('request');

function getKeywords(req, callback) {
console.log(' in watson getkeywords req url: ' + req.body.url);
  var params = {url: req.body.url};
  alchemy_language.keywords(params, function(err, keywords) {
	if (err) {
	  return callback(err);
	}
	console.log('in getKeywords, keywords json: ' + JSON.stringify(keywords));
	callback(null,keywords);
  });
}

module.exports.getKeywords = getKeywords;

