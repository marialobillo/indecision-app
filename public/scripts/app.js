'use strict';

console.log("App.js is running");

// create app object titel/subtitle
// use title/subtitle in the template
// render template
var app = {
	title: 'Indecision App',
	subtitle: 'Let the computer decides'

	// JSX - Javascript XML
};var user = {
	name: 'Maria',
	age: 17,
	location: 'New York'
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	} else {
		return undefined;
	}
}

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title ? app.title : 'Anonymous'
	),
	React.createElement(
		'p',
		null,
		app.subtitle
	),
	user.age && user.age > 18 && React.createElement(
		'p',
		null,
		'Age : ',
		user.age,
		' '
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
