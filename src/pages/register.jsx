import React from 'react'
import AuthLayouts from '../components/Layouts/AuthLayouts'
import FormRegister from '../components/Fragments/FormRegister'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayouts title="Register" type='register'>
          <FormRegister />
      </AuthLayouts>
    </div>
  )
}

export default RegisterPage