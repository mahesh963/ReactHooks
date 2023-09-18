import { Button } from "@mui/material";
import React, {
	createContext,
	useEffect,
	useMemo,
	useState,
	useCallback,
} from "react";
import Child from "./Child";

export function UseContextHook() {
	const [count, setCount] = useState(0);
	const [randomNum, setRandomNum] = useState(1);

	//useCallback(()=>{},[])

	const passMethod = useCallback(() => {
		//passing this method to child component
	}, [randomNum]);

	const randomNumMethod = () => {
		setRandomNum(Math.random());
	};

	return (
		<>
			<div>
				<button onClick={() => setCount(count + 1)}>Add</button>
				<p>count: {count}</p>
				<button onClick={() => setCount(count - 1)}>Minus</button>
				<br />
				<br />
				<Child passMethod={passMethod} />
				<p>{randomNum}</p>
				<button onClick={randomNumMethod}>Random Num</button>
			</div>
		</>
	);
}

export default UseContextHook;
