var React = require('react');
var ReactDOM = require('react-dom');

var data = require('../assets/data.json');

var nav = {
	titles: "Hello"
};

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