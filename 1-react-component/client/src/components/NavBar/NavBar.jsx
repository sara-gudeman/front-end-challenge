var React = require('react');
var NavItem = require('./NavItem.jsx');

var NavBar = React.createClass({
	render: function () {
		return (
			<nav>
				<ul className="tab_list">
					{this.props.data.map(function (item, index) {
						return <NavItem key={index} section={item} />
					})}
				</ul>
			</nav>
		);
	}
});

module.exports = NavBar;