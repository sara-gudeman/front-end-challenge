var React = require('react');
var NavBar = require('./NavBar/NavBar.jsx');
var ContentBody = require('./ContentBody/ContentBody.jsx');

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
	selectTab: function (id, event) {
		event.preventDefault();
		this.setState({
			selected: id
		});
	},
	getContent: function (type) {
		return this.props.data[this.state.selected].content[type];
	},
	render: function () {
		return (
			<div>
				<NavBar selectTab={this.selectTab} data={this.props.data} />
				<ContentBody />
			</div>
		);
	}
});

module.exports = Classifieds;