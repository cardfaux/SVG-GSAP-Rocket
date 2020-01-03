import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import LogRocket from './logrocket';

function App() {
	return (
		<div className='App'>
			<LogRocket />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
