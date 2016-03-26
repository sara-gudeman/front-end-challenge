var React = require('react');
var Article = require('../Content/Article.jsx');
var SectionLinks = require('../Content/SectionLinks.jsx');

var TopPanel = React.createClass({
	render: function () {
		return (
			<div className="top_panel content_panel">
				<Article article={this.props.data.article} />
				<SectionLinks details={this.props.data.details} />
			</div>
		);
	}
});

module.exports = TopPanel;