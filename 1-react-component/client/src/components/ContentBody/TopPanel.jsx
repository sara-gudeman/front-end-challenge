var React = require('react');
var Article = require('../Content/Article.jsx');
var SectionLinks = require('../Content/SectionLinks.jsx');

var TopPanel = React.createClass({
	render: function () {
		return (
			<div className="content_panel">
				<Article />
				<SectionLinks />
			</div>
		);
	}
});

module.exports = TopPanel;