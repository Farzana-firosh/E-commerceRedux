
// import React, { createContext, useState } from "react";

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
}



export const CartSlice = createSlice({
  name : 'Cart',
  initialState,
  reducers : {
    addToCart : (state,action) => {
      const newItem =  (action.payload);
      let itemFound = false;
let totalItem = state.items.length
      for (let i =0; i < totalItem; i ++ ) {
        if (state.items[i].id === newItem.id) {
          state.items[i].quantity += 1;
          itemFound = true;
          break;
        }
      }
if (!itemFound) {
  state.items.push({...newItem,quantity:1})
}
    },
    removeFromCart : (state,action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart : (state) => {
      state.items = [];
    },
  }
});
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer
