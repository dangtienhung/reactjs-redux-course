import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const newSlice = createSlice({
	name: 'news',
	initialState: {
		hits: [],
		laoding: false,
		errorMessage: '',
		query: '',
	},
});
