class Header extends React.Component{
	render(){
		return (
			<div>
				<h1>Indecision</h1>
				<h2>Put your life in the hands of a computer</h2>
			</div>
		);
	}
}

class Action extends React.Component{
	render(){
		return (
			<div>
				<button className="btn btn-info">What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component{
	render(){
		return (
			<div>
				<ul>
					<li>Task 1</li>
					<li>Task 2</li>
					<li>Task 3</li>
				</ul>
			</div>
		);
	}
}

class AddOption extends React.Component{
	render(){
		return (
			<div>
				<input type="text" name="option" className="form-control"/>
				<button className="btn btn-success">Add Option</button>
			</div>
		);
	}
}

const jsx = (
	<div>
		<Header/>
		<Action/>
		<Options/>
		<AddOption/>
	</div>
);

ReactDOM.render(jsx, document.getElementById('app'));
