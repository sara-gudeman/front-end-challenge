var React = require('react');
var ContentPanel = require('./ContentPanel.jsx');
var TopPanel = require('./TopPanel.jsx');
var BottomPanel = require('./BottomPanel.jsx');

var ContentBody = React.createClass({
	render: function () {
		return (
			<div>
				<TopPanel />
				<BottomPanel />
			</div>
		);
	}
});

module.exports = ContentBody;