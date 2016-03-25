require('./assets/css/styles.css');

var React = require('react');
var ReactDOM = require('react-dom');
var Classifieds = require('./components/Classifieds.jsx');

var _data = require('./assets/data.json');

// making the assumption that later on the data can change
ReactDOM.render(
	<Classifieds data={_data.classifieds} />,
	document.getElementById('content')
);