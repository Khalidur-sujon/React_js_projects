//data
import { data } from "../data/data";

//external import
import { useState } from "react";

function Foods() {
	const [foods, setfoods] = useState(data);

	//fitter type
	const filterType = (type) => {
		setfoods(
			data.filter((item) => {
				return item.category === type;
			})
		);
	};
	//fitter price
	const filterPrice = (price) => {
		setfoods(
			data.filter((item) => {
				return item.price === price;
			})
		);
	};

	return (
		<div className="max-w-[1280px] mx-auto px-4 py-12">
			<h1 className=" text-orange-600 text-4xl font-bold text-center">
				Top Rated Menu Items
			</h1>
			{/* filter rows */}

			<div className="flex flex-col lg:flex-row justify-between">
				{/* food filter */}
				<div>
					<p className="font-bold text-gray-700">Filter Type</p>
					<div className="flex justify-between flex-wrap">
						<button
							className="m-1 border border-orange-600 rounded-md px-2 text-orange-600 hover:bg-orange-600 hover:text-white"
							onClick={() => setfoods(data)}
						>
							All
						</button>
						<button
							className="m-1 border border-orange-600 rounded-md px-2 text-orange-600 hover:bg-orange-600 hover:text-white"
							onClick={() => filterType("burger")}
						>
							Burgers
						</button>
						<button
							className="m-1 border border-orange-600 rounded-md px-2 text-orange-600 hover:bg-orange-600 hover:text-white"
							onClick={() => filterType("pizza")}
						>
							Pizza
						</button>
						<button
							className=" m-1 border border-orange-600 rounded-md px-2 text-orange-600 hover:bg-orange-600 hover:text-white"
							onClick={() => filterType("salad")}
						>
							Salads
						</button>
						<button
							className="m-1 border border-orange-600 rounded-md px-2 text-orange-600 hover:bg-orange-600 hover:text-white"
							onClick={() => filterType("chicken")}
						>
							Chicken
						</button>
					</div>
				</div>
				{/* price filter */}
				<div>
					<p className="font-bold text-gray-700">Filter Price</p>
					<div className="flex justify-between flex-wrap max-w-[60%] lg:max-w-full">
						<button
							className=" m-1 border border-orange-600 rounded-md px-2 text-orange-600 hover:bg-orange-600 hover:text-white"
							onClick={() => filterPrice("$")}
						>
							$
						</button>
						<button
							className=" m-1 border border-orange-600 rounded-md px-2 text-orange-600 hover:bg-orange-600 hover:text-white"
							onClick={() => filterPrice("$$")}
						>
							$$
						</button>
						<button
							className=" m-1 border border-orange-600 rounded-md px-2 text-orange-600 hover:bg-orange-600 hover:text-white"
							onClick={() => filterPrice("$$$")}
						>
							$$$
						</button>
						<button
							className=" m-1 border border-orange-600 rounded-md px-2 text-orange-600 hover:bg-orange-600 hover:text-white"
							onClick={() => filterPrice("$$$$")}
						>
							$$$$
						</button>
					</div>
				</div>
			</div>

			{/* display food items */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-auto py-12 ">
				{foods.map((item, index) => (
					<div
						key={index}
						className="border shadow-lg hover:scale-105 duration-500 rounded-lg"
					>
						<img
							src={item.image}
							alt={item.name}
							className="w-full h-[200px] object-cover rounded-t-lg"
						/>
						<div className="flex justify-between px-2 py-4">
							<p className="font-bold">{item.name}</p>
							<p>
								<span className="bg-orange-600 text-white rounded p-1">
									{item.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Foods;
