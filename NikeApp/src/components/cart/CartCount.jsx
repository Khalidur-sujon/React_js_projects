//icons
import { XMarkIcon, ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

import { useDispatch } from "react-redux";
import { clearCartItem } from "../../store/CartSlice";

function CartCount({ onCartToggle, totalQunatity }) {
	const dispatch = useDispatch();

	//clear all the cart items
	const clearCart = () => {
		dispatch(clearCartItem());
	};

	return (
		<>
			<div className="sticky bg-white left-0 right-0 w-full flex justify-between items-center h-11 px-3 pt-1">
				<div className="flex items-center gap-3">
					<div className="grid items-center cursor-pointer">
						<ChevronDoubleLeftIcon
							className="w-5 h-4 text-slate-900 hover:text-orange-500 stroke-2"
							onClick={onCartToggle}
						/>
					</div>
					<div className="grid items-center">
						<h1 className="tex-base font-medium text-slate-900">
							Your Cart{" "}
							<span className="bg-slate-900 px-3 py-[0.3] rounded text-slate-100 text-sm font-normal">
								{`(${totalQunatity})`}
							</span>
						</h1>
					</div>
				</div>
				<div className="flex items-center">
					<button
						type="button"
						className="px-1 py-1 bg-slate-900 rounded"
						onClick={clearCart}
					>
						<XMarkIcon className="w-5 h-4 text-slate-100 hover:text-orange-500 stroke-2 text-xs" />
					</button>
				</div>
			</div>
		</>
	);
}

export default CartCount;
