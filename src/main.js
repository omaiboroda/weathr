'use strict';

var App = require('./App.jsx');
var React = require('react');
var $ = window.$ = require('jquery');
var Fluxxor = require("fluxxor");
var stores = require('./stores/');
var actions = require('./actions/');

$(document).ready( function() {

    var flux = new Fluxxor.Flux(stores, actions)

    App = React.createElement(App, {flux: flux});
    App = React.render(App, document.getElementById('content'))
})