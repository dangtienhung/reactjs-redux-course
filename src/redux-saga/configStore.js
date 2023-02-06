import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';
import { reducer } from './reducers';
import rootSage from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: reducer,
	middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSage);

export default store;
