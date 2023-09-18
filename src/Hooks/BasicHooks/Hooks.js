import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

export function Hooks() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(count);
	}, [count]);

	return (
		<>
			<div>
				<Button onClick={() => setCount(count + 1)}>Add</Button>
				<p>Count:{count}</p>
				<Button onClick={() => setCount(count - 1)}>Minus</Button>
			</div>
		</>
	);
}

export default Hooks;
