import React, { useState, useEffect } from 'react'
import axios from 'axios';
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

    const [userInfo, setUserInfo] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        pic: ""
    });
    const adminId = localStorage.getItem('adminId');

    const getUserInfo = async () => {
        let url = `https://gm4-server.herokuapp.com/api/admin/read/profile/${adminId}`;
        let options = {
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': "Application/json",
                'Authorization': "Bearer " + localStorage.getItem("token")
            },
        }
        try {
            const response = await axios(options);
            setUserInfo({
                name: response.data.name,
                username: response.data.username,
                email: response.data.email,
                mobile: response.data.mobile
            })
        } catch (error) {
            alert(error.response.data.error);
        }
    }

    useEffect(() => {
        getUserInfo();
    }, [])
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
                                <img src={`https://gm4-server.herokuapp.com/api/admin/profile/photo/${adminId}`} alt="photo" />
                            </Card>
                            <Card className="Adminprofiledata" style={{ backgroundColor: 'transparent' }}>
                                <center  >
                                    <h2>{userInfo.name ? userInfo.name : "Full Name"}</h2>
                                    <h4>{userInfo.username ? userInfo.username : "@User name"}</h4>
                                    <br />
                                    <p><EmailIcon fontSize='small' />
                                        {''}{''}  {userInfo.email ? userInfo.email : "abcd@gmail.com"}</p>
                                    <p><LocalPhoneIcon fontSize='small' />
                                        {''} {''}  {userInfo.mobile ? userInfo.mobile : "********"}</p>

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