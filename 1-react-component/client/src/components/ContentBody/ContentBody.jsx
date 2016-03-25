var React = require('react');
var ContentPanel = require('./ContentPanel.jsx');
var TopPanel = require('./TopPanel.jsx');

var ContentBody = React.createClass({
	render: function () {
		return (
			<div>
				<TopPanel />
				<ContentPanel />
			</div>
		);
	}
});

module.exports = ContentBody;