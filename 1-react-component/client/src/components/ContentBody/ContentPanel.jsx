var React = require('react');
var SubPanel = require('./SubPanel.jsx');

var ContentPanel = React.createClass({
	render: function () {
		return (
			<div className="content_panel">
				<SubPanel />
				<SubPanel />
			</div>
		);
	}
});

module.exports = ContentPanel;