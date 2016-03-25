var React = require('react');

var Article = React.createClass({
	render: function () {
		return (
			<div>
				<span className="subsection_title">{this.props.article.subsection}</span>
				<span className="article_title">
					<a href={this.props.article.link}>{this.props.article.title}</a>
				</span>
				<p className="description">
					{this.props.article.description}
				</p>
				<img src="" />
				<ul>
					<li>
						<a href={this.props.article.slideshow}>Slide Show</a>
					</li>
				</ul>				
			</div>
		);
	}
});

module.exports = Article;