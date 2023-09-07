//icons
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import emptyBag from "../../assets/emptybag.png";

function CartEmpty({ onCartToggle }) {
	return (
		<>
			<div className="flex justify-center items-center h-screen flex-col px-11 gap-7 text-center">
				<img
					src={emptyBag}
					alt="emptyBag/img"
					className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
				/>
				<button
					className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-orange-400 shadow-lg flex items-center py-2 gap-3 text-slate-900 justify-center text-sm px-5 font-semibold active:scale-110"
					onClick={onCartToggle}
				>
					<ArrowLeftIcon className="w-5 h-5 text-slate-900" />
					<span>Back To Nike Store</span>
				</button>
			</div>
		</>
	);
}

export default CartEmpty;
