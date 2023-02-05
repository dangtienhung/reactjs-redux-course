import './App.css';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './components/Card';
import { toggleDarkMode } from './redux-toolkit/globalSlice';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
	const globalOptions = useSelector((state) => state.global);
	console.log('🚀 ~ file: App.js:11 ~ App ~ globalOptions', globalOptions);
	const dispath = useDispatch();
	useEffect(() => {
		dispath(toggleDarkMode(darkMode));
	}, []);
	const [darkMode, setDarkMode] = useDarkMode();
	const handleToggleDarkMode = () => {
		setDarkMode(!darkMode);
		dispath(toggleDarkMode(!darkMode));
	};
	return (
		<div>
			<Card />
			<button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
		</div>
	);
};

export default App;
