var ApiClient = require('./ApiClient.js');
var apiClient = new ApiClient();

var Location = require('./Location.js');
var Weather = require('./Weather.js');

module.exports = {
    location: new Location({apiClient: apiClient}),
    weather: new Weather({apiClient: apiClient})
}