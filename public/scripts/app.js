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
	age: 36,
	location: 'Spain'
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
