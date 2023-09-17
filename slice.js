// cara ke tiga lebih simple dengan slice bawaan redux toolkit

// Impor Redux Toolkit
import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

// Membuat slice "cart" menggunakan createSlice
const cartSlice = createSlice({
  name: "cart", // Nama slice
  initialState: [], // Status awal: keranjang belanja kosong
  reducers: {
    addToCart(state, action) {
      // Action creator addToCart: menambahkan item ke keranjang belanja
      state.push(action.payload);
    },
  },
});

// Membuat toko Redux dengan slice "cart" sebagai reducer
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Menggunakan slice "cart" sebagai reducer
  },
});

// Mencetak status awal toko
console.log("oncreate store : ", store.getState());

// Mendaftarkan langganan untuk mencetak perubahan status
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// Dispatch tindakan addToCart untuk menambahkan item ke keranjang
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 10 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }));

// jalankan dengan perindah node + nama file ( node slice)
