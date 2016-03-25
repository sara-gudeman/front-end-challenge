var React = require('react');
var TopPanel = require('./TopPanel.jsx');
var BottomPanel = require('./BottomPanel.jsx');

var ContentBody = React.createClass({
	render: function () {
		return (
			<div>
				<TopPanel data={this.props.data} />
				<BottomPanel />
			</div>
		);
	}
});

module.exports = ContentBody;