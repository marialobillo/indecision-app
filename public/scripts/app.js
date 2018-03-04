'use strict';

console.log("App.js is running");

var app = {
	title: 'Indecision App',
	subtitle: 'Let the computer decides',
	options: ['One', 'Two']

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
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here are your options' : 'No options'
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

var count = 0;
var addOne = function addOne() {
	console.log('addOne');
};
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count: ',
		count
	),
	React.createElement(
		'button',
		{ onClick: addOne, className: 'btn btn-info' },
		'+1'
	)
);

console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
