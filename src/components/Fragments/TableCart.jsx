import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { DarkMode } from '../../context/DarkMode';
import { useContext } from 'react';
import { useTotalPrice, useTotalPriceDispatch } from '../../context/TotalPriceContext';

const TableCart = (props) => {
    const {products} = props;
    const totalPriceRef = useRef();
    const cart = useSelector((state) => state.cart.data);

    const {isDarkMode} = useContext(DarkMode);
    const dispatch = useTotalPriceDispatch()
    const {total} = useTotalPrice();

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
          const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
          }, 0);
          dispatch({ type: "UPDATE", payload: { total: sum } })
    
          // Simpan cart ke dalam localStorage (pastikan cart adalah objek)
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }, [cart, products]);

      
  useEffect(()=> {
    if(cart.length>0){
      totalPriceRef.current.style.display ="table-row";
    }else{
      totalPriceRef.current.style.display ="none";
    }
  },[cart])
  return (
            <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                {products.length > 0 && 
                  cart.map((item) => {
                    const product = products.find((product) => product.id === item.id);
                    const productPrice = product.price;
                    const subtotal = item.qty * productPrice;
                    return (
                      <tr key={item.id}>
                        <td>{product.title}</td>
                        <td>${" "}{productPrice.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                        <td>{item.qty}</td>
                        <td>${" "}{subtotal.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                      </tr>
                    );
                  })
                }
                    <tr ref={totalPriceRef}>
                      <td colSpan={3}>
                        <b>Total Price</b>
                        </td>
                      <td>
                        <b>
                            ${" "}{total.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
                        </b>
                      </td>
                    </tr>
                </tbody>
            </table>
  )
}

export default TableCart