import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'


const Header = () => {
  const navigate = useNavigate();
  return (
    <div>

      <Link to="/"> Home </Link>
      <Link to="/admin/organizer"> Organizer </Link>
      <Link to="/admin/userslist"> Users </Link>
      <Link to="/admin/notification"> Notification </Link>
      <FormControl>
        <InputLabel>Paid Listing</InputLabel>
        <Select variant='outlined'>
          <MenuItem onClick={() => navigate('/admin/request/paidlist')} >Request Paid List</MenuItem>
          <MenuItem onClick={() => navigate('/admin/allowed/paidlist')}>Approwed Paid List</MenuItem>
        </Select>
      </FormControl>
      <Link to="/admin/profile"> Profile </Link>
      <Link to="/admin/login"> _login_ </Link>


    </div >
  )
}

export default Header