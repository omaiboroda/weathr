'use strict'

var Base = require('./Base.js');

class Weather extends Base {
    getWeather(city) {
        return this.apiClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}`).then(data => {
            if (data) {
                return data.data;
            } else {
                console.error('ERROR', data.error);
                if (this.onError) {
                    this.onError(data.error)
                }

                return Promise.reject(data.error);
            };
        })
    }
}

module.exports = Weather;