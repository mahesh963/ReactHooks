import React, { createContext } from "react";
import ChildA from "./ChildA";

let userData = {
	name: "venky",
	age: 24,
};

let gender = "male";

export const userContext = createContext(userData, gender);

export function ContextAPI() {
	return (
		<>
			<userContext.Provider value={{ userData, gender }}>
				<div>
					<ChildA />
				</div>
			</userContext.Provider>
		</>
	);
}

export default ContextAPI;
