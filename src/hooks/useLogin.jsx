import React from 'react'
import { useEffect } from 'react';
import { getUser } from '../services/auth.service';
import { useState } from 'react';

const useLogin = () => {
    const [username, setUsername] = useState("");
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
          setUsername( getUser(token));
        }else{
          window.location.href="/login";
        }
      },[])
    return username;
}

export default useLogin