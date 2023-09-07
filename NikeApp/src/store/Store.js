import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const Store = configureStore({
	reducer: {
		cart: CartSlice,
	},
});

//export
export default Store;
