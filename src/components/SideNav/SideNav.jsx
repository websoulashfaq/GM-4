import React from 'react'
import './SideNav.css'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <div>
            <div className='sidenav'>
                <div className='button_nav'>
                    {/* side lists start */}
                    <Link className="buttons_link" to='/'>
                        Home
                    </Link><br />
                </div>
                <div className='button_nav'>
                    <Link className="buttons_link" to='/admin/organizer'>
                        All Organizers
                    </Link><br />
                </div>
                <div className='button_nav'>
                    <Link className="buttons_link" to='/admin/userslist'>
                        All Users
                    </Link><br />
                </div>
                <div className='button_nav'>
                    <Link className="buttons_link" to='/admin/request/paidlist'>
                        Request List
                    </Link><br />
                </div>
                <div className='button_nav'>
                    <Link className="buttons_link" to='/admin/allowed/paidlist'>
                        Approved List
                    </Link><br />
                </div>
                <div className='button_nav'>
                    <Link className="buttons_link" to='/admin/notification'>
                        Notifications
                    </Link><br />
                </div>
                <div className='button_nav'>
                    <Link to='/admin/profile' className='buttons_link'>
                        Profile
                    </Link>
                </div>
                {/* side lists end */}
            </div>

        </div>
    )
}

export default SideNav