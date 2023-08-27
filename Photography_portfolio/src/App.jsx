//external imports
import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";

import { motion } from "framer-motion";

// components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

//context
import { CursorContext } from "./context/CursorContext";

function App() {
	const { cursorVariant, cursorBG } = useContext(CursorContext);
	return (
		<>
			<Router>
				<Header />
				<AnimRoutes />
			</Router>
			{/* animated rouned cursor */}
			<motion.div
				variants={cursorVariant}
				animate={cursorBG}
				className="absolute top-0 left-0 w-8 h-8 bg-black rounded-full z-50 pointer-events-none"
			></motion.div>
		</>
	);
}

export default App;
