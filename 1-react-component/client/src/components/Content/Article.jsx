var React = require('react');

var Article = React.createClass({
	render: function () {
		return (
			<div className="article_container">
				<h4 className="subsection_title">{this.props.article.subsection}</h4>
				<h5 className="article_title">
					<a href={this.props.article.link}>{this.props.article.title}</a>
				</h5>
				<img className="article_img" src={this.props.article.img} />
				<p className="article_description">{this.props.article.description}</p>
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