// noted payload itu adalah data yg di proses
// Payload adalah data yang diangkut oleh tindakan (action) dan digunakan dalam reducer, tetapi tidak selalu harus "diproses." Payload adalah informasi atau data yang membawa informasi tambahan yang diperlukan untuk menjalankan aksi tersebut.

// Payload bisa saja berisi data yang akan digunakan untuk mengubah status aplikasi, tetapi tidak selalu harus diubah dalam semua kasus. Terkadang payload hanya berfungsi sebagai informasi tambahan yang diperlukan untuk menentukan cara aplikasi harus merespons tindakan tersebut.

import { legacy_createStore } from "redux";

// pertama reducer
// Definisikan reducer untuk mengelola status keranjang belanja
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 10 }],
  },
  action
) => {
  switch (action.type) {
    // inisialisasi nama fungsi
    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    // berikan nilai default
    default:
      return state;
  }
};

// ke dua store
// Membuat store Redux dengan menggunakan reducer yang telah didefinisikan
const store = legacy_createStore(cartReducer);
// Log status awal
console.log("oncreate store : ", store.getState());

// ke tiga subscribe ( melihat perubahan yg terjadi)
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// ke empat dispatch
// Melakukan dispatch tindakan pertama: menambahkan item ke keranjang
const action1 = { type: "ADD_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);

// Melakukan dispatch tindakan kedua: menambahkan item lain ke keranjang
const action2 = { type: "ADD_CART", payload: { id: 3, qty: 30 } };
store.dispatch(action2);

// jalankan dengan perindah node + nama file ( node redux)
