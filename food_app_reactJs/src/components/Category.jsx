//category
import { categories } from "../data/data";

function Category() {
	return (
		<div className="max-w-[1280px] mx-auto py-12 px-4">
			<h1 className="text-4xl font-bold text-orange-600 text-center ">
				Top Rated Menu Items
			</h1>

			{/* category icon */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
				{categories.map((item, index) => (
					<div
						key={index}
						className="bg-gray-100 rounded-lg flex justify-center items-center p-4 hover:scale-105 duration-300 cursor-pointer"
					>
						<p className="font-bold mr-2">{item.name}</p>
						<img
							className="w-20"
							src={item.image}
							alt={item.name}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Category;
