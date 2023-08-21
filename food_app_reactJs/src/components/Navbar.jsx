//icons
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { AiOutlineClose, AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdWallet, MdHelp } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

//data
import { data } from "../data/data";

//extrnal imports
import { useState } from "react";

function Navbar() {
	const [nav, setnav] = useState(false);
	const [foods, setfoods] = useState(data);
	const [searchQuery, setsearchQuery] = useState("");
	const [suggestions, setsuggestions] = useState([]);

	const handleSearch = (e) => {
		const newQuery = e.target.value;
		setsearchQuery(newQuery);

		//filter based on search
		const filteredFoods = foods.filter((item) => {
			return item.name.toLowerCase().includes(newQuery.toLowerCase());
		});
		setsuggestions(filteredFoods);
	};

	return (
		<div className="max-w-1240px] p-4 flex justify-evenly items-center mx-auto">
			{/* leftside */}
			<div className=" flex items-center">
				<div
					className="cursor-pointer font-bold"
					onClick={() => setnav(!nav)}
				>
					<AiOutlineMenu size={28} />
				</div>
				<h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
					Best <span className="font-bold">Eats</span>
				</h1>
				<div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] h-[34px]">
					<p className="text-white bg-black rounded-full p-1">
						Delivery
					</p>
					<p className="p-2">PickUp</p>
				</div>
			</div>
			{/* searchbar */}
			<div className="flex items-center px-2 bg-gray-200 rounded-full w-[280px] sm:w-[400px] lg:w-[500px]">
				<AiOutlineSearch size={20} />
				<input
					className="bg-transparent focus:outline-none p-1 w-full"
					type="text"
					placeholder="Search foods..."
					value={searchQuery}
					onChange={handleSearch}
				/>
			</div>

			{searchQuery && (
				<div className="max-w-[1280px] h-screen bg-black/40 py-12 px-4">
					<div className="grid grid-cols-2 md:grid-cols-4">
						{suggestions.map((item, index) => (
							<div key={index}>
								<img src={item.image} alt="" />
							</div>
						))}
					</div>
				</div>
			)}

			{/* cart */}
			<button className="bg-black text-white hidden md:flex items-center py-1 rounded-full px-2">
				<BsFillCartFill size={20} className="mr-2" /> Cart
			</button>

			{/* mobilemenu */}
			{/* overlay */}
			{nav ? (
				<div className="fixed bg-black/60 w-full h-screen top-0  duration-300"></div>
			) : (
				""
			)}

			{/* side menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 ease-in-out duration-700"
						: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 ease-in-out duration-700"
				}
			>
				<div className="flex justify-between items-center p-4">
					<h1 className="text-2xl sm:text-3xl lg:text-4xl">
						Best <span className="font-bold">Eats</span>
					</h1>
					<AiOutlineClose
						onClick={() => setnav(!nav)}
						size={28}
						className="cursor-pointer hover:text-red-600"
					/>
				</div>
				<nav>
					<ul className="flex flex-col p-4 text-gray-800 cursor-pointer">
						<li className="flex items-center text-xl py-4">
							<TbTruckDelivery size={25} className="mr-2" />
							<span className="hover:border-b w-[56%] border-gray-200">
								Orders
							</span>
						</li>
						<li className="flex items-center text-xl py-4">
							<MdFavorite size={25} className="mr-2" />
							<span className="hover:border-b w-[56%] border-gray-200">
								Favorites
							</span>
						</li>
						<li className="flex items-center text-xl py-4">
							<MdWallet size={25} className="mr-2" />
							<span className="hover:border-b w-[56%] border-gray-200">
								Wallet
							</span>
						</li>
						<li className="flex items-center text-xl py-4">
							<MdHelp size={25} className="mr-2" />
							<span className="hover:border-b w-[56%] border-gray-200">
								Help
							</span>
						</li>
						<li className="flex items-center text-xl py-4">
							<AiFillTag size={25} className="mr-2" />
							<span className="hover:border-b w-[56%] border-gray-200">
								Promotions
							</span>
						</li>
						<li className="flex items-center text-xl py-4">
							<BsFillSaveFill size={25} className="mr-2" />
							<span className="hover:border-b w-[56%] border-gray-200">
								Best Ones
							</span>
						</li>
						<li className="flex items-center text-xl py-4">
							<FaUserFriends size={25} className="mr-2" />
							<span className="hover:border-b w-[56%] border-gray-200">
								Invite Friends
							</span>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;
