import './App.css';

import Counter from './components/Counter';
import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
	const count = useSelector((state) => state.counter.count);
	return (
		<div>
			<h2 className="text-center my-2">The count from App is: {count}</h2>
			<Counter />
		</div>
	);
};

export default App;
