// react
import React from "react";
import ReactDOM from "react-dom/client";
// imports
import { BrowserRouter } from "react-router-dom";
// app
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
