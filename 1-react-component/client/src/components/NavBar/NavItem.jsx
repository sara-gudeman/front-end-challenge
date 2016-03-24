var React = require('react');

var NavItem = React.createClass({
	render: function () {
		return (
			<li>{this.props.section.name}</li>
		);
	}
});

module.exports = NavItem;