import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      // cek apakah item sudah ada di keranjang belanja
      const itemInCart = state.data.find(
        // mencari item dengan id yang sama dengan action.payload yang dikirim
        (item) => item.id === action.payload.id
      );
      // cek apakah ada item dengan id yang sama
      if (itemInCart) {
        itemInCart.qty += 1;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
