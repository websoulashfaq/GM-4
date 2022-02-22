import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SideNav from '../../components/SideNav/SideNav'
import './Home.css'

// Material Ui 
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'
import { BiGroup } from 'react-icons/bi'
import { BiMessageSquareDetail, BiSitemap } from 'react-icons/bi'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <>
      <div className="admin_home_container">
        <Header />
        <div className="admin_home">
          <SideNav />
          <div className="admin_home_main">
            <Container fixed>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                  <Grid item xs={12} sm={4} md={4}>
                    <Item className='admin_home_card'>
                      <div className="admin_home_card_content">
                        <div className="admin_home_card_details">
                          <h4>All Organizers</h4>
                          <h3>13</h3>
                          <Link className='admin_home_link' to="/admin/organizer">more details ?</Link>
                        </div>
                        <div className="admin_home_card_icon">
                          <BiSitemap />
                        </div>
                      </div>
                    </Item>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4}>
                    <Item className='admin_home_card'>
                      <div className="admin_home_card_content">
                        <div className="admin_home_card_details">
                          <h4>All Users</h4>
                          <h3>13</h3>
                          <Link className='admin_home_link' to="/admin/userslist">more details ?</Link>
                        </div>
                        <div className="admin_home_card_icon">
                          <BiGroup />
                        </div>
                      </div>
                    </Item>
                  </Grid>

                  <Grid item xs={12} sm={4} md={4}>
                    <Item className='admin_home_card'>
                      <div className="admin_home_card_content">
                        <div className="admin_home_card_details">
                          <h4>Total paid listing</h4>
                          <h3>13</h3>
                          <Link className='admin_home_link' to="/admin/allowed/paidlist">more details ?</Link>
                        </div>
                        <div className="admin_home_card_icon">
                          <BiMessageSquareDetail />
                        </div>
                      </div>
                    </Item>
                  </Grid>

                </Grid>
              </Box>
            </Container>
           <div className='chart section'>


           </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home