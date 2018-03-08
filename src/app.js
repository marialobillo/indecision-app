class IndecisionApp extends React.Component{
	render(){
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		const options = ['Thing one', 'Thing two', 'Thing four'];
		return(
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options options={options}/>
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component{
	render(){
		console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h3>{this.props.subtitle}</h3>
			</div>
		);
	}
}

class Action extends React.Component{
	handlePick(){
		alert('HandlePick')
	}
	render(){
		return (
			<div>
				<button onClick={this.handlePick} className="btn btn-info">What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component{
	constructor(props){
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}
	handleRemoveAll(){
		//alert('Remove all buttons!');
		console.log(this.props.options);
	}
	render(){
		return (
			<div>
					<button onClick={this.handleRemoveAll}>Remove All</button>
					{ this.props.options.map((option) => <Option key={option} optionText={option} />) }
			</div>
		);
	}
}

class Option extends React.Component{
	render(){
		return (
			<div>
				{this.props.optionText}
			</div>
		);
	}
}


class AddOption extends React.Component{
	handleAddOption(e){
		e.preventDefault();
		const option = e.target.elements.option.value.trim();

		if(option){
			alert(option);
		}
	}
	render(){
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" className="form-control"/>
					<button className="btn btn-success" type="submit" >Add Option</button>
				</form>
			</div>
		);
	}
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
