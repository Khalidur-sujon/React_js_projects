//icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
//hooks
import { useState } from "react";

function Navbar() {
	const [nav, setnav] = useState(true);

	const handleNav = () => {
		setnav(!nav);
	};

	return (
		<div className="flex justify-center items-center max-w-[1240px] h-24 mx-auto px-4 text-white">
			<h1 className="text-3xl text-[#00df9a] font-bold w-full">React</h1>
			<ul className="hidden md:flex">
				<li className="p-4 hover:text-[#00f9da] ">Home</li>
				<li className="p-4 hover:text-[#00f9da] ">Company</li>
				<li className="p-4 hover:text-[#00f9da] ">Resources</li>
				<li className="p-4 hover:text-[#00f9da] ">About</li>
				<li className="p-4 hover:text-[#00f9da] ">Contact</li>
			</ul>
			<div className="block md:hidden" onClick={() => handleNav()}>
				{/* toggle menu icon */}
				{nav ? (
					<AiOutlineMenu
						className="cursor-pointer md:hidden"
						size={20}
					/>
				) : (
					<AiOutlineClose
						className="cursor-pointer md:hidden"
						size={20}
					/>
				)}

				<div
					className={
						!nav
							? "fixed left-0 top-0 w-[60%] border-r border-gray-900 h-full bg-[rgb(0,3,0)] z-20 ease-in-out duration-500"
							: "fixed left-[-100%] ease-in-out duration-500"
					}
				>
					<h1 className="text-3xl text-[#00df9a] font-bold w-full pl-8 mt-8">
						React
					</h1>
					<ul className="p-4 uppercase">
						<li className="p-4 border-b border-gray-600 hover:text-[#00f9da]">
							Home
						</li>
						<li className="p-4 border-b border-gray-600 hover:text-[#00f9da]">
							Company
						</li>
						<li className="p-4 border-b border-gray-600 hover:text-[#00f9da]">
							Resources
						</li>
						<li className="p-4 border-b border-gray-600 hover:text-[#00f9da]">
							About
						</li>
						<li className="p-4 hover:text-[#00f9da]">Contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
