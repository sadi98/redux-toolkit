import React, { useState, useEffect } from 'react'
import useLogin from '../../hooks/useLogin'
import Button from '../Elements/Button'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { DarkMode } from '../../context/DarkMode'

const Navbar = () => {
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)

    // useContext
    const {isDarkMode, setIsDarkMode} =useContext(DarkMode);

    useEffect(()=>{
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0);
        setTotalCart(sum);
    },[cart])

    const handleLogout = () =>{
        localStorage.removeItem("token");
        alert('Sampai Jumpa')
        window.location.href="/login";
      }
  return (
    <div className='flex justify-end h-20 bg-blue-600 text-white items-center px-10'>
        <p className='mr-5'>
            {username}
        </p>
        <Button classname={` mr-5 right-2 top-2 p-2 text-white rounded`} onClick={()=>setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 'Light' : 'Dark'}
        </Button>
        <Button className='ml-5 bg-black' onClick={handleLogout}>Logout</Button>
        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
            {totalCart}
        </div>
    </div>
  )
}

export default Navbar