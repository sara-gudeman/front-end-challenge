var React = require('react');
var List = require ('../List/List.jsx');

var SectionLinks = React.createClass({
	render: function () {
		return (
			<div>
				<span className="subsection_title">{this.props.details.subsection}</span>
				<List data={this.props.details.links} />
			</div>
		);
	}
});

module.exports = SectionLinks;