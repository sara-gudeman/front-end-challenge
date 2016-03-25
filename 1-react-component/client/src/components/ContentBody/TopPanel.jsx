var React = require('react');
var Article = require('../WIP-Content/Article.jsx');

var TopPanel = React.createClass({
	render: function () {
		return (
			<div className="content_panel">
				<Article />
				Detail links
			</div>
		);
	}
});

module.exports = TopPanel;