var React = require('react');
var NavBar = require('./NavBar/NavBar.jsx');

var Classifieds = React.createClass({
	render: function () {
		return (
			<div>
				<NavBar data={this.props.data} />
				<div>Content</div>
			</div>
		);
	}
});

module.exports = Classifieds;