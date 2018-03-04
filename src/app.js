console.log("App.js is running");

var app = {
	title: 'Indecision App',
	subtitle: 'Let the computer decides',
	options : ['One', 'Two']
}



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

// Make button "-1" setup minusOne function and register - log "minus one"
// Make button to reset - count = 0 , log "reset"

console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
