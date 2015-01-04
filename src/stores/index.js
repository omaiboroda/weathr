var LocationStore = require('./LocationStore');
var WeatherStore = require('./WeatherStore');

module.exports = {
    location: new LocationStore(),
    weather: new WeatherStore()
}