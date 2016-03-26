var React = require('react');
var List = require ('../List/List.jsx');

var SectionLinks = React.createClass({
	render: function () {
		return (
			<div className="section_container">
				<h4 className="subsection_title">{this.props.details.subsection}</h4>
				<List listClass="styled section_links" data={this.props.details.links} />
			</div>
		);
	}
});

module.exports = SectionLinks;