import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>Login
      <Link to="/admin/forgotpassword">  ForgotPassword  </Link>
    </div>
  )
}

export default Login