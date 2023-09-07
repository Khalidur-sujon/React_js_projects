//icons
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import { useDispatch } from "react-redux";
import {
	removeCartItem,
	increaseItemQTY,
	decreaseItemQTY,
} from "../../store/CartSlice";

function CartItem({
	item: { id, title, price, text, img, color, shadow, cartQuantity },
}) {
	const dispatch = useDispatch();

	//remove cart item
	const onRemoveItem = () => {
		dispatch(
			removeCartItem({
				id,
				title,
				price,
				text,
				img,
				color,
				shadow,
				cartQuantity,
			})
		);
	};

	//increase item quantity
	const increaseQTY = () => {
		dispatch(
			increaseItemQTY({
				id,
				title,
				price,
				text,
				img,
				color,
				shadow,
				cartQuantity,
			})
		);
	};
	//decrease item quantity
	const decreaseQTY = () => {
		dispatch(
			decreaseItemQTY({
				id,
				title,
				price,
				text,
				img,
				color,
				shadow,
				cartQuantity,
			})
		);
	};
	return (
		<>
			<div className="flex justify-between items-center px-5 w-full">
				<div className="flex items-center gap-5">
					<div
						className={`bg-gradient-to-b ${color} ${shadow} relative rounded hover:scale-105 transition-all duration-150 p-3 grid items-center`}
					>
						<img
							src={img}
							alt={`img/cart-item/${id}`}
							className="w-36 lg:w-28 h-auto object-fill"
						/>
					</div>
					<div className="grid items-center gap-2">
						<div className="grid items-center">
							<h1 className="font-medium text-lg text-slate-900 lg:text-sm">
								{title}
							</h1>
							<p className="text-sm text-slate-800 lg:tex-xs">
								{text}
							</p>
						</div>
						<div className="flex items-center justify-around w-full">
							<button
								className="bg-slate-900 rounded flex items-center justify-center active:scale-90"
								onClick={decreaseQTY}
							>
								<MinusIcon className="w-5 h-5 text-slate-200 stroke-[2]" />
							</button>
							<div className="w-6 h-6 rounded-full bg-slate-900 text-slate-200 flex justify-center items-center">
								{cartQuantity}
							</div>
							<button
								className="bg-slate-900 rounded flex items-center justify-center active:scale-90"
								onClick={increaseQTY}
							>
								<PlusIcon className="w-5 h-5 text-slate-200 stroke-[2]" />
							</button>
						</div>
					</div>
				</div>
				<div className="grid items-center gap-6">
					<div className="grid items-center justify-items-center">
						${price * cartQuantity}
					</div>
					<div className="grid items-center justify-items-center">
						<button
							className="bg-slate-900 text-slate-200 rounded p-0.5 grid items-center justify-center cursor-pointer"
							onClick={onRemoveItem}
						>
							<TrashIcon className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default CartItem;
