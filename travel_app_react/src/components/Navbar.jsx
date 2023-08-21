//external import
import { useState } from "react";

//icons
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaPinterest,
} from "react-icons/fa";

function Navbar() {
	const [nav, setnav] = useState(false);
	const [logo, setlogo] = useState(false);

	const handleNav = () => {
		setnav(!nav);
		setlogo(!logo);
	};

	return (
		<div className="max-w-[1240px] h-20 w-full px-20 py-4 flex justify-between items-center absolute z-10 text-white ">
			<div>
				<h1 className={logo ? "hidden" : "block"}>BEACHES</h1>
			</div>
			<ul className="hidden md:flex">
				<li>Home</li>
				<li>Destinations</li>
				<li>Travel</li>
				<li>View</li>
				<li>Book</li>
			</ul>
			<div className="hidden md:flex gap-x-1">
				<BiSearch />
				<BsPerson />
			</div>
			{/* humburger menu */}
			<div onClick={handleNav} className="md:hidden z-20 cursor-pointer">
				{nav ? (
					<AiOutlineClose
						size={20}
						className="text-black font-bold"
					/>
				) : (
					<AiOutlineMenu size={20} className="text-whtie" />
				)}
			</div>
			{/* mobile menu dropdown */}
			<div
				onClick={handleNav}
				className={
					nav
						? "absolute top-0 left-0 bg-gray-400/90 w-full z-10 px-4 py-5 text-black flex flex-col duration-500 md:hidden"
						: "absolute top-0 left-[-100%] bg-gray-400/90 w-full z-10 px-4 py-5 text-black flex flex-col duration-500 md:hidden"
				}
			>
				<ul>
					<h1>BEACHES</h1>
					<li className="border-b mt-4">Home</li>
					<li className="border-b">Destinations</li>
					<li className="border-b">Travel</li>
					<li className="border-b">View</li>
					<li className="border-b">Book</li>
					<div className="flex flex-col">
						<button className="my-6">Search</button>
						<button>Account</button>
					</div>
					<div className="flex justify-between my-6">
						<FaFacebook className="icon" />
						<FaTwitter className="icon" />
						<FaInstagram className="icon" />
						<FaYoutube className="icon" />
						<FaPinterest className="icon" />
					</div>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
