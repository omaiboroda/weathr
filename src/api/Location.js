'use strict'

var Base = require('./Base.js');

class Location extends Base {
    getLocation() {
        return this.apiClient.get('http://ip-api.com/json').then(data => {
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

module.exports = Location;