import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
	switch (action) {
		case "Add":
			return { count: state.count + 1 };
		case "Minus":
			return { count: state.count - 1 };
		default:
			return state;
	}
};

export function useReducerExample() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<div>
				<button onClick={() => dispatch("Add")}>Add</button>
				<p>count: {state.count}</p>
				<button onClick={() => dispatch("Minus")}>Minus</button>
			</div>
		</>
	);
}

export default useReducerExample;
