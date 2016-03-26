var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
	render: function () {
		var styling = this.props.listClass || '';
		return (
			<ul className={styling}>
				{this.props.data.map(function (item, index) {
					return <ListItem 
													key={index} 
													title={item.title}
													link={item.link} />
				}.bind(this))}
			</ul>
		);
	}
});

module.exports = List;