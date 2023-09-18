import React, { memo } from "react";

export function Child(passMethod) {
	console.log("This is child component");
	return (
		<>
			<div>
				<p>child component</p>
			</div>
		</>
	);
}

export default memo(Child);
