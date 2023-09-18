import React, { useState, useEffect, useContext } from "react";
import ChildC from "./ChildC";

export function ChildB() {
	return (
		<>
			<div>
				<ChildC />
			</div>
		</>
	);
}

export default ChildB;
