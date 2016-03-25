var React = require('react');
var NavBar = require('./NavBar/NavBar.jsx');
var Content = require('./Content/Content.jsx');
var Advertisement = require('./Advertisement/Advertisement.jsx');

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
				<div className="content_box">
					<Content featured={this.getContent('featured')} details={this.getContent('details')} />
					<hr />
					<Advertisement data={this.getContent('advertisement')} />
					<hr />
					<footer>Place a classified ad</footer>
				</div>
			</div>
		);
	}
});

module.exports = Classifieds;