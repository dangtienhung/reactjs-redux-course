import { decrement, increment, incrementByValues } from '../redux/Counter';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispath = useDispatch();
	const handleIncrement = () => dispath(increment());
	const handleDecrement = () => dispath(decrement());
	const handleIncrementByValues = () => dispath(incrementByValues(10));
	return (
		<div className="p-10 text-center bg-gray-100">
			<h2>Counter: {count}</h2>
			<div className="flex items-center justify-center mt-5 gap-x-5">
				<button
					onClick={handleIncrement}
					className="p-2 text-white bg-pink-300 rounded"
				>
					Increment
				</button>
				<button
					className="p-2 text-white bg-pink-300 rounded"
					onClick={handleDecrement}
				>
					Decrement
				</button>
				<button
					className="p-2 text-white bg-pink-300 rounded"
					onClick={handleIncrementByValues}
				>
					Increase by 10
				</button>
			</div>
		</div>
	);
};

export default Counter;
