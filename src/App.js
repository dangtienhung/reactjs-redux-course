import './App.css';

import React, { useEffect } from 'react';

import ButtonToggle from './components/ButtonToggle';
import HackerNews from './components/HackerNews';
import Sidebar from './components/Sidebar';

const App = () => {
	// Generator function
	useEffect(() => {
		function* demoGenerator() {
			yield 1;
			yield 2;
			yield 3;
		}
		const gen = demoGenerator();
		console.log(gen.next());
		console.log(gen.next());
	}, []);
	return <div>{/* <HackerNews /> */}</div>;
};

export default App;
