import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Store from "./store/Store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={Store}>
			<Toaster
				position="top-center"
				reverseOrder={false}
				toastOptions={{ duration: 1000 }}
			/>
			<App />
		</Provider>
	</React.StrictMode>
);
