import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
	name: 'news',
	initialState: {
		hits: [],
		loading: false,
		errorMessage: '',
		query: '',
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
		setQuerySearch: (state, action) => ({
			...state,
			query: action.payload,
		}),
	},
});

export const { setNews, getNews, setLoading, setQuerySearch } =
	newsSlice.actions;
export default newsSlice.reducer;
