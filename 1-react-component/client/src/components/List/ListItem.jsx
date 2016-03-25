var React = require('react');

var ListItem = React.createClass({
	render: function () {
		return (
			<li>
				<a href={this.props.link}>
					{this.props.title}
				</a>
			</li>
		);
	}
});

module.exports = ListItem;