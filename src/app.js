console.log("App.js is running");

var app = {
	title: 'Indecision App',
	subtitle: 'Let the computer decides',
	options : ['One', 'Two']
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

	<h1>{app.title}</h1>
	{app.subtitle && <p>{app.subtitle}</p>}
	<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>


	{(user.age && user.age > 18) && <p>Age : {user.age} </p>}
	{getLocation(user.location)}
</div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
