import { Button } from "@mui/material";
import React, { createContext, useEffect, useMemo, useState } from "react";

export function UseContextHook() {
	const [count, setCount] = useState(0);

	const handleChange = useMemo(() => {
		for (let i = 0; i < 1000; i++) {
			console.log(i);
		}
		return count * 10;
	}, []);

	//useMemo(()=>{},[])

	return (
		<>
			<div>
				<button onClick={() => setCount(count + 1)}>Add</button>
				<p>count: {count}</p>
				<button onClick={() => setCount(count - 1)}>Minus</button>
				<br />
				<br />
				<p>{handleChange}</p>
			</div>
		</>
	);
}

export default UseContextHook;
