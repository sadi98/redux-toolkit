import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormLogin from '../components/Fragments/FormLogin'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayouts title="Login" type='login'>
          <FormLogin />
      </AuthLayouts>
    </div>
  )
}

export default LoginPage