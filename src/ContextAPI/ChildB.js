import React, { useState, useEffect, useContext } from "react";

import { userContext } from "./index";

export function ChildB() {
	return (
		<>
			<userContext.Consumer>
				{(userContext) => (
					<div>
						<p>Child B</p>
						<p>
							This is {userContext.userData.name} and my age is{" "}
							{userContext.userData.age} and gender is {userContext.gender}
						</p>
					</div>
				)}
			</userContext.Consumer>
		</>
	);
}

export default ChildB;
