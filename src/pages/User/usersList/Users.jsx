import React from 'react'
import './Users.css'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <div>Users
      <Link to="/admin/userdetails">more</Link>

    </div>
  )
}

export default Users