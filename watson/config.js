'use strict';

var extend = require('extend');

var services = {
  // replace apikey with your specific Alchemy apikey which
  // you obtained by creating an Alchemy Language service on Bluemix
  alchemy_api_key: process.env.ALCHEMY_API_KEY || 'apikey',
};

function getBluemixServiceConfig(name) {
  var services = JSON.parse(process.env.VCAP_SERVICES);
  for (var service_name in services) {
    if (service_name.indexOf(name) === 0) {
      var service = services[service_name][0];
      return {
        url: service.credentials.url,
        username: service.credentials.username,
        password: service.credentials.password
      };
    }
  }
  console.error('The service '+name+' is not in VCAP_SERVICES, did you forget to bind it?');
  return {};
}

module.exports = {
  services: services,
  host: process.env.HOST || process.env.VCAP_APP_HOST ||'127.0.0.1',
  port: process.env.PORT || process.env.VCAP_APP_PORT || 8080
};
