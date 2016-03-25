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
		return this.props.data[this.state.selected].content;
	},
	selectTab: function (id, event) {
		event.preventDefault();
		this.setState({
			selected: id
		});
	},
	render: function () {
		return (
			<div>
				<NavBar selectTab={this.selectTab} data={this.props.data} />
				<Content content={this.getContent()} />
			</div>
		);
	}
});

module.exports = Classifieds;