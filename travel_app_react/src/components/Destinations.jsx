//images
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

function Destinations() {
	return (
		<div className="max-w-[1280px] h-full px-4 my-12 mx-auto text-center">
			<h1>All-Inclusive Resorts</h1>
			<p className="p-4">On the Caribbean's Best Beaches</p>
			<div className="grid grid-rows-none grid-cols-5 py-2 gap-2 md:gap-4">
				<img
					className="w-full h-full object-cover col-span-3  row-span-2"
					src={BoraBora}
				/>
				<img className="w-full h-full object-cover" src={BoraBora2} />
				<img className="w-full h-full object-cover" src={Maldives} />
				<img className="w-full h-full object-cover" src={Maldives2} />
				<img className="w-full h-full object-cover" src={KeyWest} />
			</div>
		</div>
	);
}

export default Destinations;
