import React from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import { useState } from 'react';
import { useEffect } from 'react';
import getProducts from '../services/product.service';
import useLogin from '../hooks/useLogin';
import TableCart from '../components/Fragments/TableCart';
import Navbar from '../components/Layouts/Navbar';
import { useContext } from 'react';
import { DarkMode } from '../context/DarkMode';

  
function ProductsPage() {

  const [products, setProducts] = useState([]);
  const {isDarkMode, setIsDarkMode} =useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProducts((data) =>{
      setProducts(data)
    });
  }, []);
  
  return (
    <>
    <Navbar/>
      <div className={`flex justify-center py-5 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <div className='w-3/4 flex flex-wrap'>
            {products.length > 0 && products.map((product)=>(
              <CardProduct key={product.id}>
                    <CardProduct.Header images={product.image} id={product.id}/>
                    <CardProduct.Body title={product.title} id={product.id}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} id={product.id}/>
                </CardProduct>
            ))}
          </div>
          <div className='w-1/2'>
            <h1 className='text-3xl font-bold text-blue-600 ml-5 mb-2'>Cart</h1>
              <TableCart products={products}/>
          </div>
      </div>
    </>
  )
}

export default ProductsPage