"use strict";

console.log("App.js is running");

// JSX - Javascript XML
var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Does this change!!"
	),
	React.createElement(
		"p",
		null,
		"This is some info."
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
