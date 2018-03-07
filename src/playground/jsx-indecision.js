console.log('App.js is running!');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

const onRemoveAll = () => {
	app.options = [];
	render();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};


const appRoot = document.getElementById('app');


const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision} className="btn btn-lg btn-primary">What should I do?</button>
			<button onClick={onRemoveAll} className="btn btn-danger">Remove All</button>
			<ol>
				{/* map over app.options getting back an array of list (set key and text) */}
				{ app.options.map((item) =>  <li key={item}>{item}</li>)}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button className="btn btn-success">Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();
