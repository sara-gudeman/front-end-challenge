var React = require('react');
var NavBar = require('./NavBar/NavBar.jsx');
var Content = require('./Content.jsx');

var Classifieds = React.createClass({
	render: function () {
		return (
			<div>
				<NavBar data={this.props.data} />
				<Content />
			</div>
		);
	}
});

module.exports = Classifieds;