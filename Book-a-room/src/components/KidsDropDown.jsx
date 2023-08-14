/* eslint-disable react/jsx-key */
//context
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
// headless ui menu
import { Menu } from "@headlessui/react";

// icons
import { BsChevronDown } from "react-icons/bs";

const lis = [
	{ name: "0 Kid" },
	{ name: "1 Kids" },
	{ name: "2 Kids" },
	{ name: "3 Kids" },
	{ name: "4 Kids" },
];

export default function KidsDropDown() {
	const { kid, setkid } = useContext(RoomContext);
	return (
		<Menu as="div" className="w-full h-full bg-white relative">
			<Menu.Button className="flex items-center justify-between h-full w-full px-8">
				{kid === "0 kid" ? "No kids" : kid}{" "}
				<BsChevronDown className="text-base text-accent-hover" />
			</Menu.Button>
			{/* list */}

			<Menu.Items as="ul" className="bg-white flex flex-col w-full z-20">
				{lis.map((li, index) => {
					return (
						<Menu.Item
							key={index}
							onClick={() => setkid(li.name)}
							as="li"
							className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
						>
							{li.name}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
}
