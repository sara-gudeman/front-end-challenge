var React = require('react');
var List = require ('../List/List.jsx');

var BottomPanel = React.createClass({
	render: function () {
		return (
			<div className="bottom_panel content_panel">
				<div className="advert_img_container">
					<img className="advert_img_lrg" src={this.props.data.img_lrg} />
				</div>
				<div className="section_container">
					<List listClass="section_links" data={this.props.data.links} />
					<img className="advert_img_sm" src={this.props.data.img_sm} />
				</div>
			</div>
		);
	}
});

module.exports = BottomPanel;