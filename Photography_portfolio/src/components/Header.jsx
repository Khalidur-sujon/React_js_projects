//external import
import { Link } from "react-router-dom";

//img import
import logo from "../img/header/logo.svg";

//components
import MobileNav from "./MobileNav";
import Socials from "./Socials";

function Header() {
	return (
		<header
			className="fixed w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] z-30 flex 
        items-center "
		>
			{/* logo and nav */}
			<div className="flex flex-col w-full lg:flex-row lg:items-center justify-between">
				{/* logo */}
				<Link to={"/"}>
					<img className="w-[200px]" src={logo} alt="" />
				</Link>
				{/* nav bar  */}
				<nav className="hidden lg:flex gap-x-12 font-semibold">
					<Link
						to={"/"}
						className="text-[#696c6d] hover:text-primary transition"
					>
						Home
					</Link>
					<Link
						to={"/about"}
						className="text-[#696c6d] hover:text-primary transition"
					>
						About
					</Link>
					<Link
						to={"/portfolio"}
						className="text-[#696c6d] hover:text-primary transition"
					>
						Portfolio
					</Link>
					<Link
						to={"/contact"}
						className="text-[#696c6d] hover:text-primary transition"
					>
						Contact
					</Link>
				</nav>
			</div>
			<Socials />
			<MobileNav />
		</header>
	);
}

export default Header;
