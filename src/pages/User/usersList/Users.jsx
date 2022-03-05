import React from 'react'
import './Users.css'
import { Link } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import content from './content';



//card meterail ui
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Users = () => {
  return (
    <div>

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



        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            {/* userLIst data  */}
            {content.data.map((user, key) => {
              return (
                <Grid item xl={3} xs={12} lg={3} md={4} sm={6} key={key}>
                  <div className='userList-user_card'>
                    <div className='userList-userImage'>
                      <img src={user.Image} alt="" />
                    </div>
                    <div className='userList-user_name'>
                      <h4>{user.name}</h4>
                      <h5>{user.email}</h5>
                    </div>
                    <div className='userList-viewMore_option'>
                      <Link to={"/admin/userdetails"}>More Details</Link>
                    </div>
                  </div>
                </Grid>
              )
            })}
            {/* userList end */}

          </Grid>
        </Box>
      </Container>

    </div>
  )
}

export default Users