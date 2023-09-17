import React from 'react'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom';

const AuthLayouts =(props) => {
    const {children, title, type} = props;
  return (
    <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
          {children}
          
          <p className='text-sm mt-5 text-center'>
            {type === 'login' ? "Don't have an account? " : 'Already have an account ? '}
            {type === 'login' && (
            <Link to="/register" className='font-bold text-blue-600'>Sign Up</Link>
            )}
            {type === 'register' && (
            <Link to="/login" className='font-bold text-blue-600'>Sign In</Link>
            )}
          </p>
    </div>
  )
}

export default AuthLayouts