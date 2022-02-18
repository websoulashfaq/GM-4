import React from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'

const Profile = () => {
    return (
        <div>Profile
            <Link to="/admin/edit/profile"> EditProfile </Link>
            <Link to="/admin/changepassword"> ChangePassword </Link>
        </div>
    )
}

export default Profile