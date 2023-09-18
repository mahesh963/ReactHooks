import React, { useState, useEffect, useContext } from "react";

import { userContext } from "./index";

export function ChildC() {
	let userInfo = useContext(userContext);
	console.log("userInfo", userInfo);

	return (
		<>
			<div>
				<p>Component C</p>
				<p>Name:{userInfo.name}</p>
				<p>Age:{userInfo.age} </p>
				<p>Color:{userInfo.favColor} </p>
			</div>
		</>
	);
}

export default ChildC;
