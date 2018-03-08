// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class Visible extends React.Component{
	constructor(props){
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}
	handleToggleVisibility(){
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			}
		});
	}
	render(){
		return (
			<div>
				<h1>Vibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.visibility? 'Hide details' : 'Show details'}
				</button>
			</div>
		);
	}
}


ReactDOM.render(<Visible />, document.getElementById('app'));
