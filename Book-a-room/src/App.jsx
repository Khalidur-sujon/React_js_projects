// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

// external imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{
		path: "/room/:id",
		element: <RoomDetails />,
	},
]);

export default function App() {
	return (
		<div>
			<Header />
			<RouterProvider router={Router} />
			<Footer />
		</div>
	);
}
