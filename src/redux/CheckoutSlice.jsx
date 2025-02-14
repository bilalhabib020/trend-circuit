
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    email: "",
    address: "",
  },
  orderPlaced: false,
};

const CheckoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    placeOrder: (state) => {
      state.orderPlaced = true;
    },
    resetCheckout: (state) => {
      state.userInfo = { name: "", email: "", address: "" };
      state.orderPlaced = false;
    },
  },
});

export const { setUserInfo, placeOrder, resetCheckout } = CheckoutSlice.actions;
export default CheckoutSlice.reducer;
