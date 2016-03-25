var React = require('react');
var List = require ('../List/List.jsx');

var BottomPanel = React.createClass({
	render: function () {
		console.log(this.props.data)
		return (
			<div className="content_panel">
				<img src={this.props.data.img_lrg} />
				<List data={this.props.data.links} />
				<img src={this.props.data.img_sm} />
			</div>
		);
	}
});

module.exports = BottomPanel;