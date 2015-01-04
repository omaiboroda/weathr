/**
 * @jsx React.DOM
 */

var React = require('react');
var moment = require('moment');

var FluxMixin = require('fluxxor').FluxMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;
var Utils = require('../etc/Utils.js');

require('./Forecast.less');

var Forecast = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('location', 'weather')],

    getStateFromFlux() {
        var flux = this.getFlux();

        return {
            location: flux.store('location').getLocation(),
            weather: flux.store('weather').getWeather()
        }
    },

    render() {
        return (
            <div className="Forecast">
                <div className="location">{this.state.location.city}</div>
                <div className="date">{moment().format('dddd, Do MMMM')}</div>
                <div className="weather">
                    <div>{this.state.weather ? this.state.weather.weather[0].main : null}</div>
                    <div>{this.state.weather.main ? Utils.kelvinToCelsius(this.state.weather.main.temp) : null}&deg;</div>
                </div>
            </div>
        );
    }

});

module.exports = Forecast;