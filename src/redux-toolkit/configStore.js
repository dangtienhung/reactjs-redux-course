import counterSlice, { incrementByValue } from './counterSlice';

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import globalSlice from './globalSlice';
import logger from 'redux-logger';

const sagaMiddlware = createSagaMiddleware();

// hight order component
const loggerMiddleware = (store) => (next) => (action) => {
	action.payload = 10; // can thiệp gán giá trị mới cho payload
	next(action);
	// console.log('🚀 ~ file: configStore.js:17 ~ action', action);
};

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		global: globalSlice,
	},
	middleware: (gDM) => gDM().concat(logger, sagaMiddlware),
});

// sagaMiddlware.run(rootSaga)

// store.subscribe(() => {
// 	// javascript observer pattern
// 	console.log(`currentState: ${store.getState().counter.count}`);
// });

// store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(3));
// store.dispatch(incrementByValue(5));
