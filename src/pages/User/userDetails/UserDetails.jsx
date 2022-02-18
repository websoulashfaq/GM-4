import React from 'react'
import './UserDetails.css'
import {Link} from 'react-router-dom'

const UserDetails = () => {
  return (
    <div>UserDetails


      <Link to="/admin/usertournament">booked tournament</Link>
      <Link to="/admin/action"> BlockUser</Link>
      <Link to="/admin/action"> Scam</Link>
    </div>
  )
}

export default UserDetails