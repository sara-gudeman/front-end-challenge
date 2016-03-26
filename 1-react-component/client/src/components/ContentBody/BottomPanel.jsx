var React = require('react');
var List = require ('../List/List.jsx');

var BottomPanel = React.createClass({
	render: function () {
		console.log(this.props.data)
		return (
			<div className="content_panel">
				<div className="advert_img_container">
					<img className="advert_img_lrg" src={this.props.data.img_lrg} />
				</div>
				<div className="advert_list_container">
					<List data={this.props.data.links} />
					<img className="advert_img_sm" src={this.props.data.img_sm} />
				</div>
			</div>
		);
	}
});

module.exports = BottomPanel;