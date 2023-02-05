import './App.css';

import ButtonToggle from './components/ButtonToggle';
import React from 'react';
import Sidebar from './components/Sidebar';

const App = () => {
	return (
		<div>
			<Sidebar />
			<ButtonToggle />
		</div>
	);
};

export default App;
