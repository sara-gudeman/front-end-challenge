var React = require('react');

var NavItem = React.createClass({
	render: function () {
		return (
			<li className="tab_item">
				<a href="#" onClick={this.props.handleClick}>
					{this.props.section.name}
				</a>
			</li>
		);
	}
});

module.exports = NavItem;