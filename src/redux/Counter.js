const INCREMENT = 'increment';
const DECREMENT = 'DECREMENT';
const INCREMENTBYVALUES = 'incrementByValues';

const initialState = {
	count: 0,
};

export const increment = () => ({
	type: INCREMENT,
});

export const decrement = () => ({
	type: DECREMENT,
});

export const incrementByValues = (values) => ({
	type: INCREMENTBYVALUES,
	payload: values,
});

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		case INCREMENTBYVALUES:
			return { ...state, count: state.count + action.payload };
		default:
			return state;
	}
};
