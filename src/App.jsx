import React from 'react';
import './App.scss';
import Icon from './assets/react-icon.svg';

const App = () => {
	return (
		<div className='container'>
			<h1>Hello World</h1>
			<img src={Icon} alt='Icon' />
		</div>
	);
};

export default App;
