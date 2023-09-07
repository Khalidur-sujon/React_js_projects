//icons
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/CartSlice";

function Item({
	item: { ifExists, btn, color, id, img, price, rating, shadow, text, title },
}) {
	const dispath = useDispatch();
	const addToCart = () => {
		const item = { id, title, price, text, img, color, shadow };
		dispath(addItemToCart(item));
	};
	return (
		<>
			<div
				className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
					ifExists ? "justify-items-start" : "justify-items-center"
				} rounded-xl py-4 px-5 transition-all duration-300 hover:scale-105 ease-in-out w-full`}
			>
				{/* text */}
				<div
					className={`grid  items-center ${
						ifExists
							? "justify-items-start"
							: "justify-items-center"
					} `}
				>
					<h1 className="text-slate-200 font-medium text-xl lg:text-lg md:text-base filter drop-shadow">
						{title}
					</h1>
					<p className="text-slate-200 font-normal md:text-sm text-base filter drop-shadow">
						{text}
					</p>
					<div className="flex justify-between items-center w-28">
						<div className="flex items-center bg-white/80 px-1 rounded">
							<h1 className="text-black font-medium">${price}</h1>
						</div>
						<div className="flex items-center gap-1 ">
							<StarIcon className="icon-style text-slate-100 w-5 h-5 md:w-4 md:h-4" />
							<h1 className="text-sm font-normal text-slate-100">
								{rating}
							</h1>
						</div>
					</div>
					<div className="flex items-center gap-3 justify-center mt-3">
						<button
							className="bg-white/90 p-0.5 rounded"
							onClick={() => addToCart()}
						>
							<ShoppingBagIcon className="icon-style text-slate-900" />
						</button>
						<button className="bg-white/90 px-2 py-1 text-sm text-black shadow shadow-sky-200 rounded active:scale-x-90">
							{btn}
						</button>
					</div>
				</div>
				{/* image */}
				<div
					className={`flex items-center  ${
						ifExists ? "absolute top-5 right-1" : "justify-center"
					} `}
				>
					<img
						src={img}
						alt={`img/item-img/${id}`}
						className={`transitions-theme hover:-rotate-12 ${
							ifExists
								? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
								: "h-36 w-64 "
						} `}
					/>
				</div>
			</div>
		</>
	);
}

export default Item;
