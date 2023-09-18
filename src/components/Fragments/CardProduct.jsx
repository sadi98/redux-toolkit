import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Elements/Button'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const CardProduct = (props) => {

    const {children} = props;
  return (
    <div className='w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow my-2 mx-2 flex flex-col justify-between'>
        {children}
    </div>
  )
}



const Header = (props) =>{
    const {images,id} = props;
    return (
        <Link to={`/product/${id}`}>
            <img 
                src={images} 
                alt="product-1" 
                className='p-8 rounded-t-lg h-60 w-full object-cover' />
        </Link>
    )
}

const Body = (props) =>{
    const {children, title, id} = props;
    return (
            <div className='px-5 pb-5 h-full'>
                <Link to={`/product/${id}`}>
                    <h5 className='text-xl font-semibold tracking-tight text-white'>
                        {title}
                    </h5>
                    <p className='text-m text-white'>
                        {children.substring(0,50)}
                    </p>
                </Link>
            </div>
    )
}


const Footer = (props) =>{

    const {price,handleCart, id} = props;
    const dispatch = useDispatch();
    return (
        <div className='flex items-center justify-between px-5 pb-5'>
            <span className='text-xl font-bold text-white'>${" "}{price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</span>

            <Button classname='bg-blue-600' onClick={() => dispatch(addToCart({ id, qty: 1 }))}>Add To Cart</Button> 
        </div>
    )
}
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct