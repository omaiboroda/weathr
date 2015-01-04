var Fluxxor = require('fluxxor');
var ec = require('../eventConstants.js');

var LocationStore = Fluxxor.createStore({
    initialize() {
        this.location = {};

        this.bindActions(
          ec.server.CHANGE_LOCATION, this.handleChangeLocation
        );
    },

    handleChangeLocation(location) {
        this.location = location;

        this.emit('change');
    },

    getLocation() {
        return JSON.parse(JSON.stringify(this.location));
    }
});

module.exports = LocationStore;