import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import checkoutReducer from "./CheckoutSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export default store;