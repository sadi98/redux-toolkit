import React from 'react'
import InputForm from '../Elements/Input'
import Button from '../Elements/Button'
import { useRef } from 'react'
import { useEffect } from 'react'
import login from '../../services/auth.service'
import { useState } from 'react'

const FormLogin = () => {

  const usernameRef = useRef(null);
  const [loginFailed, setLoginFailed] = useState("");

  useEffect(()=> {
    usernameRef.current.focus();
  },[])
  const handleLogin =(e)=>{
    e.preventDefault();
    const data ={
      username : e.target.username.value,
      password : e.target.password.value,
    } ;
    login(data, (status, res) => {
      if(status){
        localStorage.setItem("token", res);
        window.location.href ="/products"
      }else{
        setLoginFailed(res.response.data)
      }
    })
  }
  return (
    <form onSubmit={handleLogin }>
      {loginFailed && (
        <p className='text-red-500'>{loginFailed}</p>
      )}
          <InputForm 
            label="Username"
            placeholder="username"
            type="text"
            name="username"
            ref={usernameRef}
          />
          <InputForm 
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            name="password"
          />
          <Button type="submit" classname="bg-blue-600 w-full">Login</Button>
        </form>
  )
}

export default FormLogin