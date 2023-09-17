import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Elements/Button'
import CardProduct from '../components/Fragments/CardProduct'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import getProducts from '../services/product.service';
import useLogin from '../hooks/useLogin';

  
function ProductsPage() {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [getTotal, setTotal] = useState(0);
  const totalPriceRef = useRef();
  const username = useLogin();
  
  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
  },[])


  useEffect(() => {
    getProducts((data) =>{
      setProducts(data)
    });
  }, []);
  

  const handleCart = (id) => {
    const existingItemIndex = cart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].qty += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  useEffect(() => {
    if(products.length > 0 && cart.length >0){
      const sum = cart.reduce((acc, item) => {
        // console.log(item);
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty; // Menggunakan '+' untuk menjumlahkan
      }, 0);
      setTotal(sum);
      localStorage.setItem("cart",JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () =>{
    localStorage.removeItem("token");
    alert('Sampai Jumpa')
    window.location.href="/login";
  }

  useEffect(()=> {
    if(cart.length>0){
      totalPriceRef.current.style.display ="table-row";
    }else{
      totalPriceRef.current.style.display ="none";
    }
  },[cart])
  
  return (
    <>
      <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
        {username}
        <Button className='ml-5 bg-black' onClick={handleLogout}>Logout</Button>
      </div>
      <div className='flex justify-center py-5'>
          <div className='w-3/4 flex flex-wrap'>
            {products.length > 0 && products.map((product)=>(
              <CardProduct key={product.id}>
                    <CardProduct.Header images={product.image} id={product.id}/>
                    <CardProduct.Body title={product.title} id={product.id}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} id={product.id} handleCart={handleCart}/>
                </CardProduct>
            ))}
          </div>
          <div className='w-1/2'>
            <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
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
          </div>
      </div>
    </>
  )
}

export default ProductsPage