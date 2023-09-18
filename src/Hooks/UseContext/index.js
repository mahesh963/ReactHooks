import { Button } from "@mui/material";
import React, { createContext } from "react";
import ChildA from "./ChildA";

//create,provide, usecontext

const userData = {
	name: "venky",
	age: 24,
	favColor: "blue",
};
export const userContext = createContext();

export function UseContextHook() {
	return (
		<>
			<userContext.Provider value={userData}>
				<ChildA />
			</userContext.Provider>
		</>
	);
}

export default UseContextHook;
