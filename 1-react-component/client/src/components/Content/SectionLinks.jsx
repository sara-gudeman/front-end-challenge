var React = require('react');

var SectionLinks = React.createClass({
	render: function () {
		return (
			<div>
				<span className="subsection_title">{this.props.details.subsection}</span>
				Some list of links here
			</div>
		);
	}
});

module.exports = SectionLinks;