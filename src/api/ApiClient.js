'use strict';

var axios = require('axios');

class ApiClient {
    constructor() {

    }

    get(url, params = {}) {
        return this.request({
            url: url,
            method: 'get',
            params: params
        });
    }

    put(url, payload = {}) {
        return this.request({
            url: url,
            method: 'put',
            data: payload
        });
    }

    post(url, payload = {}) {
        return this.request({
            url: url,
            method: 'post',
            data: payload
        });
    }

    delete(url) {
        return this.request({
            url: url,
            method: 'delete'
        });
    }

    request(options) {
        if (!options.params) {
            options.params = {};
        }

        if (this.authToken) {
            options.params.token = this.authToken;
        }

        return axios(options)
    }

    setAuthToken(authToken) {
        this.authToken = authToken;
    }
}

module.exports = ApiClient;