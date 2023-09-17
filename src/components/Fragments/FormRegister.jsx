import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'
import { useRef } from 'react'
import { useEffect } from 'react'

const FormRegister = () => {
  const nameRef = useRef(null);

  useEffect(()=> {
    nameRef.current.focus();
  },[])
  return (
    <form action="">
          <InputForm 
            label="Fullname"
            placeholder="Insert Your Name here ..."
            type="text"
            name="fullname"
            ref={nameRef}
          />
          <InputForm 
            label="Email"
            placeholder="example@mail.com"
            type="email"
            name="email"
          />
          <InputForm 
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            name="password"
          />
          <InputForm 
            label="Confirm Password"
            placeholder="Confirm Your Password"
            type="password"
            name="confirmPassword"
          />
          <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
  )
}

export default FormRegister