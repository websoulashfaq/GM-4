import React from 'react'
import './ForgotPassword'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div>ForgotPassword
      <Link to="/admin/reset/password">Reset</Link>
    </div>
  )
}

export default ForgotPassword