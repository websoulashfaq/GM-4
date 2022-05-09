import React, { useEffect, useState } from 'react'
import './Organizers.css'

import { Link } from 'react-router-dom'

//meterail ui

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

//images
import OrgUser from '../../../assets/images/orguser.jpg';

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import axios from 'axios';

{/** All Organizers Card Style */ }
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: '85px',
  color: theme.palette.text.secondary,
}));





const Organizers = () => {

  const [organizers, setOrganizers] = useState([])

  const getAllOrganizers = async () => {

    const adminId = localStorage.getItem("adminId");
    let url = `https://gm4-server.herokuapp.com/api/admin/list/organisers/${adminId}`;
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
      setOrganizers(response.data)
    } catch (error) {
      alert(error.response.data.error);
    }

  }

  useEffect(() => {
    getAllOrganizers();
  }, [])


  return (
    <div>
      <Header />

      <div className='org-all'>

        {/*Organization heading background*/}
        <div className='org-head'>
        </div>

        <Box sx={{ flexGrow: 1 }} ml='auto' mr='auto'>
          <Grid container spacing={3}
            sx={{ maxWidth: '100%' }}
            style={{
              width: '100%',
              paddingRight: '25px'
            }}
            ml='auto' mr='auto'
            mt='-60px' mb='100px'
          >

            {/*Organization heading */}
            <div className='org-head2'>
              <h1>Organizers</h1>
            </div>
          </Grid>
        </Box>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1 }} ml='auto' mr='auto'>
          <Grid container spacing={3} sx={{ maxWidth: '100%' }}
            style={{ width: '100%' }}
            ml='auto' mr='auto' mt='50px' mb='10px'>

            <Grid item sm={12} md={6}>
            </Grid>

            <Grid paddingRight={7} item sm={12} md={6} ml='auto' mr='auto' >
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', float: 'right' }}
              >

                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Organizer..."
                  inputProps={{ 'aria-label': 'Search Organizers' }}
                />
                <IconButton type="submit"
                  sx={{
                    p: '10px',
                    backgroundColor: '#6BDCFC',
                    color: 'white',
                  }}
                  aria-label="search">
                  <SearchIcon />
                </IconButton>

              </Paper>
            </Grid>
          </Grid>
        </Box>


        {/** all Organizers */}
        <Box sx={{ flexGrow: 1 }} ml='auto' mr='auto'>
          <Grid container padding={5}
            sx={{ maxWidth: 1200 }}
            style={{
              width: '100%',
              paddingright: '50px'
            }}
            ml='auto' mr='auto'
            mt='20px' mb='100px'
          >

            {/** all Organizers Card */}
            {
              organizers && organizers.map((org) => {
                return (
                  <Grid key={org._id} p={2} item xs={12} sm={6} md={4} xl={3}>
                    <Item className='org-img' >
                      <img src={`https://gm4-server.herokuapp.com/api/admin/get/image/user/${org._id}/${localStorage.getItem("adminId")}`} />
                      <p>{org.firstName}</p>
                      <Link  className='org-more' to={`/admin/organizerdetails/${org._id}`}>more details?</Link>
                    </Item>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </div>
      <Footer />
    </div>
  )
}

export default Organizers