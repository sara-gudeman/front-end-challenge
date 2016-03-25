var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
	render: function () {
		return (
			<ul>
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