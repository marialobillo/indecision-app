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
	age: 17,
	location: 'New York'
};

function getLocation(location){
	if(location){
		return <p>Location: {location}</p>;
	} else{
		return undefined;
	}
}

var template = (
<div>
	<h1>{app.title ? app.title : 'Anonymous'}</h1>
	<p>{app.subtitle}</p>

	{(user.age && user.age > 18) && <p>Age : {user.age} </p>}
	{getLocation(user.location)}
</div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
