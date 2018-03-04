


let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};
const minusOne = () => {
	count--;
	renderCounterApp();
};
const resetCount = () =>{
	count = 0;
	renderCounterApp();
};


// Make button "-1" setup minusOne function and register - log "minus one"
// Make button to reset - count = 0 , log "reset"




const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne} className="btn btn-success">+1</button>
			<button onClick={minusOne} className="btn btn-danger">-1</button>
			<button onClick={resetCount} className="btn btn-warning">Reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
