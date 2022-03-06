import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import AllowedPaidList from '../pages/PaidListing/allowedPaidLists/AllowedPaidLists'
import ChangePassword from '../pages/Admin/changePassword/ChangePassword'
import RequestPaidList from '../pages/PaidListing/requestPaidList/RequestPaidList'
import Delete from '../pages/delete/Delete'
import ForgotPassword from '../authentication/forgotPassword/ForgotPassword'
import Login from '../authentication/login/Login'
import Notification from '../pages/notifications/Notifications'
import OrganizerDetails from '../pages/organizer/organizerDetails/OrganizerDetails'
import Organizers from '../pages/organizer/organizers/Organizers'
import Profile from '../pages/Admin/profile/Profile'
import UserDetails from '../pages/User/userDetails/UserDetails'
import UsersList from '../pages/User/usersList/Users'
import UserTournaments from '../pages/User/userTournaments/UserTournaments'
import RequestDetails from '../pages/PaidListing/requestDetails/RequestDetails'
import EditProfile from '../pages/Admin/editProfile/EditProfile'
import ResetPage from '../authentication/forgotPassword/ResetPage'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const navigate = () => {
    return (
        <div>
           
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/admin/allowed/paidlist' element={<AllowedPaidList />} />
                    <Route path='/admin/request/paidlist' element={<RequestPaidList />} />
                    <Route path='/admin/request/details' element={<RequestDetails />} />
                    <Route path='/admin/action' element={<Delete />} />
                    <Route path='/admin/notification' element={<Notification />} />
                    <Route path='/admin/organizerdetails' element={<OrganizerDetails />} />
                    <Route path='/admin/organizer' element={<Organizers />} />
                    <Route path='/admin/userdetails' element={<UserDetails />} />
                    <Route path='/admin/usertournament' element={<UserTournaments />} />
                    <Route path='/admin/userslist' element={<UsersList />} />
                    <Route path='/admin/changepassword' element={<ChangePassword />} />
                    <Route path='/admin/forgotpassword' element={<ForgotPassword />} />
                    <Route path='/admin/reset/password' element={<ResetPage />} />
                    <Route path='/admin/login' element={<Login />} />
                    <Route path='/admin/profile' element={<Profile />} />
                    <Route path='/admin/edit/profile' element={<EditProfile />} />
                </Routes>
            </Router>
        </div>
    )
}

export default navigate