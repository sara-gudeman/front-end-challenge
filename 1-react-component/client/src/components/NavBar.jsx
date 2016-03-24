var React = require('react');
var ReactDOM = require('react-dom');

var data = require('../assets/data.json');

var Content = React.createClass({
	render: function () {
		return (
			<div>Content</div>
		);
	}
});

var NavItem = React.createClass({
	render: function () {
		return (
			<li>{this.props.section.name}</li>
		);
	}
});

var NavList = React.createClass({
	render: function () {
		return (
			<ul>
				{this.props.data.map(function (item, index) {
					return <NavItem key={index} section={item} />
				})}
			</ul>
		);
	}
});

var NavBar = React.createClass({
	render: function () {
		return (
			<nav>
				<ul>
					<li>{nav.titles}</li>
				</ul>
			</nav>
		);
	}
});

ReactDOM.render(
	<NavBar />,
	document.getElementById('content')
);