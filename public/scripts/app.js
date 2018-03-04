'use strict';

console.log("App.js is running");

var app = {
	title: 'Indecision App',
	subtitle: 'Let the computer decides',
	options: ['One', 'Two']
};

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

// Make button "-1" setup minusOne function and register - log "minus one"
// Make button to reset - count = 0 , log "reset"

console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
