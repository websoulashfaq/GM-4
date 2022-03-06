import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import adminprofilepic from './../../../assets/images/Admin-profile/adminprofilepic.jpg';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Grid } from '@mui/material';
import { Card } from '@mui/material';

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

{/*admin profile page */ }

const Profile = () => {

    return (


        <div style={{ overflowX: "hidden" }}>

            <Header />
            {/*Admin profile page header */}

            <div className='admin-profile-header'>
                <h1>Profile</h1>
            </div>
            <div className='admin-profile'>
                {/*Admin profile page grid*/}

                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >

                        <div className="Adminprofile">
                            <Card className="Adminprofilepic">
                                <img src={adminprofilepic} alt="" />
                            </Card>
                            <Card className="Adminprofiledata" style={{ backgroundColor: 'transparent' }}>
                                <center  >
                                    <h2>Full Name</h2>
                                    <h4>@User name</h4>
                                    <br />
                                    <p><EmailIcon fontSize='small' />
                                        {''}{''}  abcd@gmail.com</p>
                                    <p><LocalPhoneIcon fontSize='small' />
                                        {''} {''}  {9876543210}</p>

                                    <br />

                                    <Link to="/admin/edit/profile"> <button className="Admin-editprofileButton" >Edit Profile</button></Link>

                                    <Link to="/admin/changepassword"> <button className="Admin-editprofileButton" >Change Password</button></Link>

                                </center>

                            </Card>
                        </div>
                    </Grid>
                </Grid>

            </div>
            <Footer />
        </div>
    )
}

export default Profile