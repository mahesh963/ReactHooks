import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

import ContextAPI from "./ContextAPI/index";

import Hooks from "./Hooks/BasicHooks/Hooks.js";
import UseContext from "./Hooks/UseContext/index";
import UseReducer from "./Hooks/UseReducer/index";
import UseMemo from "./Hooks/UseMemo/index";
import UseCallback from "./Hooks/UseCallback/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <ContextAPI /> */}
		{/* <Hooks /> */}
		{/* <UseContext /> */}
		{/* <UseReducer /> */}
		{/* <UseMemo /> */}
		<UseCallback />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
