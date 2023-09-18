import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const TableCart = (props) => {
    const {products} = props;
    const totalPriceRef = useRef();
    const cart = useSelector((state) => state.cart.data);
    const [getTotal, setTotal] = useState(0);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
          const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
          }, 0);
          setTotal(sum);
    
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
            <table className='text-left table-auto border-separate border-spacing-x-5'>
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
                            ${" "}{getTotal.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
                        </b>
                      </td>
                    </tr>
                </tbody>
            </table>
  )
}

export default TableCart