//external import
import { createContext, useState, useEffect } from "react";

export const CursorContext = createContext();

function CursorProvider({ children }) {
	const [currnetPos, setcurrnetPos] = useState({
		x: 0,
		y: 0,
	});

	const [cursorBG, setcursorBG] = useState("default");

	const mobileViewIsActive = window.innerWidth < 768;

	useEffect(() => {
		if (!mobileViewIsActive) {
			const move = (e) => {
				setcurrnetPos({
					x: e.clientX,
					y: e.clientY,
				});
			};
			window.addEventListener("mousemove", move);

			//clean up
			return () => {
				window.addEventListener("mousemove", move);
			};
		} else {
			setcursorBG("none");
		}
	});

	const cursorVariant = {
		default: {
			x: currnetPos.x - 16,
			y: currnetPos.y - 16,
			backgroundColor: "#0e1112",
		},
		text: {
			width: "140px",
			height: "140px",
			x: currnetPos.x - 70,
			y: currnetPos.y - 70,
			backgroundColor: "#fff",
			mixBlendMode: "difference",
		},
		none: {
			width: 0,
			height: 0,
			backgroundColor: "rgba(255, 255, 255, 1)",
		},
	};

	//on mouse enter handler
	const mouseEnterHandler = () => {
		setcursorBG("text");
	};

	// on mouse leave handler
	const mouseLeaveHandler = () => {
		setcursorBG("default");
	};

	return (
		<CursorContext.Provider
			value={{
				cursorVariant,
				cursorBG,
				mouseEnterHandler,
				mouseLeaveHandler,
			}}
		>
			{children}
		</CursorContext.Provider>
	);
}

export default CursorProvider;
