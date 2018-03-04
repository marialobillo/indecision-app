'use strict';

console.log("App.js is running");

var app = {
	title: 'Indecision App',
	subtitle: 'Let the computer decides',
	options: ['One', 'Two']
};

var count = 0;
var addOne = function addOne() {
	count++;
	renderCounterApp();
};
var minusOne = function minusOne() {
	count--;
	renderCounterApp();
};
var resetCount = function resetCount() {
	count = 0;
	renderCounterApp();
};

// Make button "-1" setup minusOne function and register - log "minus one"
// Make button to reset - count = 0 , log "reset"

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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
			{ onClick: addOne, className: 'btn btn-success' },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: minusOne, className: 'btn btn-danger' },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: resetCount, className: 'btn btn-warning' },
			'Reset'
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
