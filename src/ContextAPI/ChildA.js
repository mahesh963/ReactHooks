import React, { useState, useEffect, useContext } from "react";
import ChildB from "./ChildB";

export function ChildA() {
	return (
		<>
			<div>
				<p>Child A </p>
				<ChildB />
			</div>
		</>
	);
}

export default ChildA;
