var React = require('react');
var TopPanel = require('./TopPanel.jsx');
var BottomPanel = require('./BottomPanel.jsx');

var ContentBody = React.createClass({
	render: function () {
		return (
			<div className="content_container">
				<TopPanel data={this.props.data} />
				<hr />
				<BottomPanel data={this.props.data.advert} />
				<hr />
				<footer className="classified_footer">
					<a href="#">Place a Classified Ad<i className="fa fa-angle-double-right fa-fw"></i></a>
				</footer>
			</div>
		);
	}
});

module.exports = ContentBody;