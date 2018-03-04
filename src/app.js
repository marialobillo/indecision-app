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

let count = 0;
const addOne = () => {
	console.log('addOne');
	
};
const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne} className="btn btn-info">+1</button>
	</div>
);

console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
