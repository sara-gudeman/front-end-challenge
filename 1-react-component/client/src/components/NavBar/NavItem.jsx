var React = require('react');

var NavItem = React.createClass({
	render: function () {
		return (
			<li className="tab_item">
				<a href="#">{this.props.section.name}</a>
			</li>
		);
	}
});

module.exports = NavItem;