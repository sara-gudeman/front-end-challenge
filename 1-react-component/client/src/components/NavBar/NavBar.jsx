var React = require('react');
var NavItem = require('./NavItem.jsx');

var NavBar = React.createClass({
	handleClick: function (tab, event) {
		this.props.selectTab(tab, event);
	},
	render: function () {
		return (
			<nav className="tab_nav">
				<ul className="tab_list">
					{this.props.data.map(function (item, index) {
						return <NavItem handleClick={this.handleClick.bind(this, index)} 
														key={index} 
														item={item} 
														selected={this.props.activeTab}
														id={index}
														/>
					}.bind(this))}
				</ul>
			</nav>
		);
	}
});

module.exports = NavBar;