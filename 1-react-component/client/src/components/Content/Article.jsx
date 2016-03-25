var React = require('react');

var Article = React.createClass({
	render: function () {
		return (
			<div>
				<span className="subsection_title"></span>
				<span className="article_title">
					<a href="#">Article Title</a>
				</span>
				<p className="description">
					Description
				</p>
				<img src="" />
				<ul>
					<li>
						<a href="#">Slide Show</a>
					</li>
				</ul>				
			</div>
		);
	}
});

module.exports = Article;