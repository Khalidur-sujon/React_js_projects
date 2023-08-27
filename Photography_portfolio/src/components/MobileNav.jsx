//external imports
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

//icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

const menuVariants = {
	hidden: {
		x: "100%",
	},
	show: {
		x: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.9],
		},
	},
};

function MobileNav() {
	const [openMenu, setopenMenu] = useState(false);

	return (
		<nav>
			{/* nav open button */}
			<div
				className="text-3xl text-center cursor-pointer lg:hidden"
				onClick={() => setopenMenu(true)}
			>
				<CgMenuRight />
			</div>
			{/* menu */}
			<motion.div
				variants={menuVariants}
				initial="hidden"
				animate={openMenu ? "show" : ""}
				className="absolute top-0 right-0 w-full max-w-xs bg-white h-screen z-20 shadow-xl"
			>
				<div
					className="text-3xl absolute left-4 top-14 text-primary cursor-pointer"
					onClick={() => setopenMenu(false)}
				>
					<IoMdClose />
				</div>
				{/* menu list */}
				<ul className="flex flex-col h-full justify-center items-center gap-y-8 font-semibold text-3xl">
					<li>
						<Link to={"/"}>Home</Link>
					</li>
					<li>
						<Link to={"/about"}>About</Link>
					</li>
					<li>
						<Link to={"/portfolio"}>Portfolio</Link>
					</li>
					<li>
						<Link to={"/contact"}>Contact</Link>
					</li>
				</ul>
			</motion.div>
		</nav>
	);
}

export default MobileNav;
