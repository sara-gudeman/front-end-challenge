var React = require('react');

var NavItem = React.createClass({
	render: function () {
		var isActive = this.props.id === this.props.selected ? 'selected' : '';
		return (
			<li className="tab_item">
				<a href="#" className={isActive} onClick={this.props.handleClick}>
					{this.props.item.section}
				</a>
			</li>
		);
	}
});

module.exports = NavItem;