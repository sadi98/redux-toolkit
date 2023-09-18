// cara ke dua menggunakan redux toolkit

// Impor Redux Toolkit
import toolkit from "@reduxjs/toolkit";

// Mendestrukturisasi fungsi yang diperlukan dari Redux Toolkit
const { configureStore, createAction, createReducer } = toolkit;

// Membuat action creators (tindakan)
const addToCart = createAction("ADD_CART"); // Tindakan untuk menambahkan item ke keranjang belanja
const login = createAction("CREATE_SESSION"); // Tindakan untuk membuat sesi masuk

// Membuat reducer untuk keranjang belanja menggunakan createReducer
const cartReducer = createReducer([], (builder) => {
  // Menambahkan kasus (case) untuk tindakan addToCart
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload); // Menambahkan item ke dalam keranjang belanja
  });
});

// Membuat reducer untuk status login menggunakan createReducer
const loginReducer = createReducer({ status: false }, (builder) => {
  // Menambahkan kasus (case) untuk tindakan login
  builder.addCase(login, (state, action) => {
    state.status = true; // Mengubah status login menjadi true
  });
});

// Membuat store Redux dengan reducer yang telah dibuat
const store = configureStore({
  reducer: {
    login: loginReducer, // Menggunakan reducer login untuk status login
    cart: cartReducer, // Menggunakan reducer cart untuk keranjang belanja
  },
});

// Mencetak status awal store
console.log("oncreate store : ", store.getState());

// Mendaftarkan langganan untuk mencetak perubahan status
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// Melakukan dispatch tindakan addToCart untuk menambahkan item ke keranjang
store.dispatch(addToCart({ id: 1, qty: 10 }));
store.dispatch(addToCart({ id: 2, qty: 20 }));

// Melakukan dispatch tindakan login untuk membuat sesi masuk
store.dispatch(login());

// jalankan dengan perindah node + nama file ( node toolkit)
