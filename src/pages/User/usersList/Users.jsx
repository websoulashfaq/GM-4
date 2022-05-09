import React, { useState, useEffect } from 'react'
import './Users.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import user4 from '../../../assets/userList/user4.jpg'



//card meterail ui
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Users = () => {
  const [userList, setUserList] = useState([])

  const getAllUsers = async () => {
    let adminId = localStorage.getItem('adminId')
    let url = `https://gm4-server.herokuapp.com/api/admin/list/users/${adminId}`;
    const options = {
      method: "GET",
      url: url,
      headers: {
        'Content-Type': "Application/json",
        'Authorization': "Bearer " + localStorage.getItem("token")
      },
    }
    try {
      const response = await axios(options);
      setUserList(response.data);
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div>
      <Header />
      {/* userHeader */}
      <div className='userList_header'>
        <h1>ALL USERS</h1>
      </div>
      {/* end Header */}
      <Container maxWidth="xl">

        {/* search bar */}
        <Grid xl={2} lg={2} md={3} sm={4}>
          <div className='userList-searchBar'>
            <div className='userList-search_input'>
              <input type="text" name="" placeholder='search...' id="" />
            </div>
            <div className='userList-search_icon'>

              <span class="material-icons">search</span>
            </div>
          </div>
        </Grid>
        {/* search bar end */}



        <Box sx={{ flexGrow: 1 }} className="main_userList">
          <Grid container spacing={2}>

            {/* userLIst data  */}
            {userList.map((user) => {
              return (
                <Grid item xl={3} xs={12} lg={3} md={4} sm={6} key={user._id}>
                  <div className='userList-user_card'>
                    <div className='userList-userImage'>
                      <img src={`https://gm4-server.herokuapp.com/api/admin/get/image/user/${user._id}/${localStorage.getItem("adminId")}`} alt="" />
                    </div>
                    <div className='userList-user_name'>
                      <h4>{user.firstName}</h4>
                      <h5>{user.email}</h5>
                    </div>
                    <div className='userList-viewMore_option'>
                      <Link to={`/admin/userdetails/${user._id}`}>More Details</Link>
                    </div>
                  </div>
                </Grid>
              )
            })}
            {/* userList end */}

          </Grid>
        </Box>
      </Container>

      <Footer />
    </div>
  )
}

export default Users