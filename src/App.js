import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';

function App() {
	return (
		<div className="App">
			<header className="App-header container">
				<h1>Coming Soon</h1>
			</header>
			<br />
			<Button color="primary">Hello World</Button>
			<br />
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
        Learn React
			</a>
		</div>
	);
}

export default App;
