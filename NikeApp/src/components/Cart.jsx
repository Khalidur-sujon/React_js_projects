//components
import CartItem from "./cart/CartItem";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//import from redux store
import {
	setCloseCart,
	selectCartState,
	selectCartItems,
	selectTotalAmount,
	cartTotalQuantity,
	getTotal,
} from "../store/CartSlice";

function Cart() {
	const dispatch = useDispatch();
	const ifCartState = useSelector(selectCartState);
	const cartItems = useSelector(selectCartItems);

	const totalAmount = useSelector(selectTotalAmount);
	const totalQunatity = useSelector(cartTotalQuantity);

	useEffect(() => {
		dispatch(getTotal());
	}, [cartItems, dispatch]);

	const onCartToggle = () => {
		dispatch(
			setCloseCart({
				cartState: false,
			})
		);
	};

	console.log(cartItems);
	return (
		<>
			<div
				className={`fixed left-0 top-0 right-0 bottom-0 w-full h-screen blur-effect-theme opacity-100 z-[200] ${
					ifCartState
						? "opacity-100 visible translate-x-0 transition-all duration-300"
						: "opacity-0 invisible translate-x-8 transition-all duration-300"
				}`}
			>
				<div className="absolute h-screen max-w-xl blur-effect-theme w-full right-0">
					<CartCount
						onCartToggle={onCartToggle}
						totalQunatity={totalQunatity}
					/>
					{cartItems.length === 0 ? (
						<CartEmpty onCartToggle={onCartToggle} />
					) : (
						<div>
							<div className="flex gap-7 flex-col items-start justify-start lg:gap-5 overflow-y-scroll scroll-style h-[81vh] scroll-hidden ">
								{cartItems.map((item, i) => (
									<CartItem key={i} item={item} />
								))}
							</div>
							<div className="fixed bottom-0 bg-white  w-full px-5 py-2 grid items-center">
								<div className="flex items-center justify-between">
									<h1 className="text-base font-semibold uppercase">
										Subtotal
									</h1>
									<h1 className="text-sm bg-slate-900 text-slate-200 rounded px-1 py-0.5">
										${totalAmount}
									</h1>
								</div>
								<div className="grid items-center gap-2">
									<p className="text-sm font-medium text-center">
										Taxes and Shipping Will Calculate At
										Shipping
									</p>
									<button className="w-full bg-slate-900 text-slate-200 shadow-md shadow-slate-900 rounded-md active:scale-105 transition-all duration-150">
										Check Out
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Cart;
