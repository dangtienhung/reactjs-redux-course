import './App.css';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HackerNews from './components/HackerNews';
import { getNews } from './redux-saga/news/newsSlice';

const App = () => {
	// // Generator function
	// const dispath = useDispatch();
	// useEffect(() => {
	// 	dispath(getNews());
	// }, [dispath]);
	// const hits = useSelector((state) => state.news.hits);
	// console.log('🚀 ~ file: App.js:15 ~ App ~ hits', hits);
	return (
		<div>
			<HackerNews />
		</div>
	);
};

export default App;
