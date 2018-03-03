console.log("App.js is running");

// create app object titel/subtitle
// use title/subtitle in the template
// render template
var app = {
	title: 'Indecision App',
	subtitle: 'Let the computer decides'
}

// JSX - Javascript XML
var user = {
	name: 'Maria',
	age: 36,
	location: 'Spain'
};

var template = (
<div>
	<h1>{app.title}</h1>
	<p>{app.subtitle}</p>
	<p>Location: {user.location}</p>
</div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
