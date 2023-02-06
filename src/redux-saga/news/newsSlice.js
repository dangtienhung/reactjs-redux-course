import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
	name: 'news',
	initialState: {
		hits: [],
		loading: false,
		errorMessage: '',
	},
	reducers: {
		setNews: (state, action) => ({
			...state,
			hits: action.payload,
		}),
		getNews() {},
		setLoading: (state, action) => ({
			...state,
			loading: action.payload,
		}),
		setErrorMessage: (state, action) => ({
			...state,
			errorMessage: action.payload,
		}),
	},
});

export const { setNews, getNews, setLoading } = newsSlice.actions;
export default newsSlice.reducer;
