var Fluxxor = require('fluxxor');
var ec = require('../eventConstants.js');

var WeatherStore = Fluxxor.createStore({
    initialize() {
        this.weather = {
            weather: [{}]
        };

        this.bindActions(
          ec.server.CHANGE_WEATHER, this.handleChangeWeather
        );
    },

    handleChangeWeather(weather) {
        this.weather = weather;

        this.emit('change');
    },

    getWeather() {
        return JSON.parse(JSON.stringify(this.weather));
    }
});

module.exports = WeatherStore;