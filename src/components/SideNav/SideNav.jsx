import React from 'react'
import './SideNav.css'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <div>
            <div className='sidenav'>
                <div className='button_nav'>
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
                        Request Lists
                    </Link><br />
                </div>
                <div className='button_nav'>
                    <Link className="buttons_link" to='/admin/allowed/paidlist'>
                        Approved Lists
                    </Link><br />
                </div>
                <div className='button_nav'>
                    <Link className="buttons_link" to='/admin/notification'>
                        Notifications
                    </Link><br />
                </div>
                <div className='button_nav'>
                    <a className="buttons_link" href="/admin/profile">
                        Profile
                    </a><br />
                </div>
            </div>

        </div>
    )
}

export default SideNav