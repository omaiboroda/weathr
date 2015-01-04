/**
 * @jsx React.DOM
 */

var React = require('react');
var BigVideo = require('./components/BigVideo.jsx');
var Forecast = require('./components/Forecast.jsx');

var FluxMixin = require('fluxxor').FluxMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;

require('./App.less');

var App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('location')],

    componentDidMount() {
        this.getFlux().actions.location.getLocation();
    },

    getStateFromFlux() {
        return {}
    },

    render() {
        return (
            <div className="App">
                <BigVideo />
                <Forecast />
            </div>
        );
    }

});

module.exports = App;