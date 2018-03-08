
class Counter extends React.Component{
	constructor(props){
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0,
		};
	}
	handleAddOne(){
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}
	handleMinusOne(){
		this.setState((prevState) => count: prevState.count - 1 );
	}
	handleReset(){
		this.setState(() => count: 0 );
	}
	render(){
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

// Create 3 methods : handleAddOne, handlMinusOne, handlReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor


ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
// 	count++;
// 	renderCounterApp();
// };
// const minusOne = () => {
// 	count--;
// 	renderCounterApp();
// };
// const resetCount = () =>{
// 	count = 0;
// 	renderCounterApp();
// };
//
//
//
// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne} className="btn btn-success">+1</button>
// 			<button onClick={minusOne} className="btn btn-danger">-1</button>
// 			<button onClick={resetCount} className="btn btn-warning">Reset</button>
// 		</div>
// 	);
//
// 	ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();
