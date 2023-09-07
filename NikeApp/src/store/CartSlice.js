import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
	cartState: false,
	cartItems: localStorage.getItem("cart")
		? JSON.parse(localStorage.getItem("cart"))
		: [],
	cartTotalAmount: 0,
	cartTotalQuantity: 0,
};

//create slice
const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setOpenCart: (state, action) => {
			state.cartState = action.payload.cartState;
		},

		setCloseCart: (state, action) => {
			state.cartState = action.payload.cartState;
		},
		addItemToCart: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
				toast.success(`Item QTY Increased.`);
			} else {
				const temp = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(temp);

				toast.success(`${action.payload.title} added to cart`);
			}

			//save add cart item to local storage
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		removeCartItem: (state, action) => {
			const selectedRemoveItem = state.cartItems.filter(
				(item) => item.id !== action.payload.id
			);
			state.cartItems = selectedRemoveItem;

			//update the local storage
			localStorage.setItem("cart", JSON.stringify(state.cartItems));

			//toast
			toast.success(`${action.payload.title} Removed From Cart`);
		},

		increaseItemQTY: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
				toast.success(` Item QTY Increased`);
			}
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		decreaseItemQTY: (state, action) => {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
				toast.success(` Item QTY Decreased`);
			} else {
				//if item quantiy 1, then remove that item
				state.cartItems.splice(itemIndex, 1);
				toast.success("Item Removed From Cart");
			}
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		clearCartItem: (state) => {
			state.cartItems = [];
			toast.success(`Cart Cleared`);
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},

		getTotal: (state) => {
			let { totalAmount, totalQTY } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { price, cartQuantity } = cartItem;
					const totalPrice = price * cartQuantity;

					cartTotal.totalAmount += totalPrice;
					cartTotal.totalQTY += cartQuantity;

					return cartTotal;
				},
				{ totalAmount: 0, totalQTY: 0 }
			);

			//update the initial state
			state.cartTotalAmount = totalAmount;
			state.cartTotalQuantity = totalQTY;
		},
	},
});

//export
export const {
	setOpenCart,
	setCloseCart,
	addItemToCart,
	removeCartItem,
	increaseItemQTY,
	decreaseItemQTY,
	clearCartItem,
	getTotal,
} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const cartTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
