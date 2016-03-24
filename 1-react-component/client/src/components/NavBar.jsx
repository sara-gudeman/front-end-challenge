var React = require('react');
var ReactDOM = require('react-dom');

var _data = require('../assets/data.json');

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

var Classifieds = React.createClass({
	render: function () {
		return (
			<div>
				<nav>
					<NavList data={this.props.data}/>
				</nav>
				<div>Content</div>
			</div>
		);
	}
});

// making the assumption that later on the data can change
ReactDOM.render(
	<Classifieds data={_data.classifieds} />,
	document.getElementById('content')
);