import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import globalSlice from './globalSlice';

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		global: globalSlice,
	},
});
