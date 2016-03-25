var React = require('react');
var NavBar = require('./NavBar/NavBar.jsx');
var Content = require('./Content.jsx');

var Classifieds = React.createClass({
	getDefaultProps: function () {
		return {
			selected: 0
		};
	},
	getInitialState: function () {
		return {
			selected: this.props.selected
		}
	},
	getContent: function () {
		return this.props.data[this.props.selected].content;
	},
	render: function () {
		return (
			<div>
				<NavBar data={this.props.data} />
				<Content content={this.getContent()} />
			</div>
		);
	}
});

module.exports = Classifieds;