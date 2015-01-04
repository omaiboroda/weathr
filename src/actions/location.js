var api = require('../api/');

module.exports = {
    getLocation() {
        var locationStore = this.flux.store('location');

        api.location.getLocation().then( (location) => {
                this.dispatch("CHANGE_LOCATION", location);
            api.weather.getWeather(locationStore.getLocation().city).then( (weather) => {
                this.dispatch("CHANGE_WEATHER", weather);
            });
        })
    }
}