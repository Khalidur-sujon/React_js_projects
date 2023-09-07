import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import {
	HeartIcon,
	MagnifyingGlassIcon,
	ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
//import from redux store
import {
	setOpenCart,
	selectCartItems,
	cartTotalQuantity,
} from "../store/CartSlice";

function Navbar() {
	const [navState, setnavState] = useState(false);
	const dispatch = useDispatch();
	const totalQunatity = useSelector(cartTotalQuantity);

	const onCartToggle = () => {
		dispatch(
			setOpenCart({
				cartState: true,
			})
		);
	};

	const onNavScroll = () => {
		if (window.scrollY > 30) {
			setnavState(true);
		} else {
			setnavState(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onNavScroll);

		return () => {
			window.removeEventListener("scroll", onNavScroll);
		};
	}, []);

	return (
		<>
			<header
				className={`${
					!navState
						? "absolute top-7 left-0  right-0 opacity-100 z-50"
						: "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-50 bg-white/50 backdrop-filter backdrop-blur bg-opacity-50 shadow-sm shadow-slate-100 transition-all duration-300 bg-clip-padding"
				}`}
			>
				<nav className="flex justify-between items-center nike-container ">
					<div className="flex items-center">
						<img
							src={logo}
							alt="logo/img"
							className={`w-16 h-auto ${
								navState && "filter brightness-0"
							}`}
						/>
					</div>
					<ul className="flex items-center justify-center gap-2">
						<li className="grid items-center">
							<MagnifyingGlassIcon
								className={` icon-style ${
									navState &&
									"text-slate-900 transition-all duration-300"
								}`}
							/>
						</li>

						<li className="grid items-center">
							<HeartIcon
								className={` icon-style ${
									navState &&
									"text-slate-900 transition-all duration-300"
								}`}
							/>
						</li>

						<li className="grid items-center">
							<button
								className="border-none outline-none active:scale-110 transition-all duration-300 relative"
								onClick={onCartToggle}
							>
								<ShoppingBagIcon
									className={` icon-style ${
										navState &&
										"text-slate-900 transition-all duration-300"
									}`}
								/>
								<div
									className={`absolute top-4 right-0 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300
                                ${
									navState
										? "bg-slate-900 shadow-slate-900 text-slate-100"
										: "bg-slate-100 shadow-slate-100 text-slate-900"
								}`}
								>
									{totalQunatity}
								</div>
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
