import React from 'react'
import './RequestPaidList.css'
import { Link } from 'react-router-dom'

const RequestPaidList = () => {
  return (
    <div>RequestPaidList
      <Link to={'/admin/request/details'}>View Details</Link>
    </div>
  )
}

export default RequestPaidList