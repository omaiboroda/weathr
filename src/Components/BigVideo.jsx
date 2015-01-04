var React = require('react');
require('./BigVideo.less')

var BigVideoWrap = React.createClass({

    render() {
        return (
            <video className="BigVideo" autoPlay loop id="bgvid">
                <source src="Winter.mp4" type="video/mp4" />
            </ video>
        );
    }

});

module.exports = BigVideoWrap;