import React, { useState, useEffect, useContext } from "react";
import ChildB from "./ChildB";

export function ChildA() {
	return (
		<>
			<div>
				<ChildB />
			</div>
		</>
	);
}

export default ChildA;
