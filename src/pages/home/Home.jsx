import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SideNav from '../../components/SideNav/SideNav'
import './Home.css'
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts'



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
  // Sample chart data
  const pdata = [
    {
      name: '1 day',
      users: 5,
      org: 0
    },
    {
      name: '5 day',
      users: 11,
      org: 0
    },
    {
      name: '10 day',
      users: 15,
      org: 3
    },
    {
      name: '15 day',
      users: 26,
      org: 5
    },
    {
      name: '20 day',
      users: 43,
      org: 7
    },
    {
      name: '25 day',
      users: 67,
      org: 7
    },
    {
      name: '30 day',
      users: 87,
      org: 12
    },
    {
      name: '35 day',
      users: 98,
      org: 15
    },
    {
      name: '40 day',
      users: 98,
      org: 16
    },
    {
      name: '45 day',
      users: 98,
      org: 16
    },

    {
      name: '50 day',
      users: 101,
      org: 14
    },
    {
      name: '55 day',
      users: 129,
      org: 13
    },
    {
      name: '60 day',
      users: 158,
      org: 15
    },
    {
      name: '65 day',
      users: 202,
      org: 22
    },
  ];
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
              {/* chart helper :-https://www.geeksforgeeks.org/create-a-line-chart-using-recharts-in-reactjs/ */}
              <div style={{ marginTop: '3rem' }} className='chart section'>
                <div className="admin_chart_title_section">
                  <span>|</span>
                  <h1> Real Time Data</h1>
                </div>
                <ResponsiveContainer width="100%" aspect={2}>
                  <LineChart data={pdata} margin={{ right: 50 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name"
                      interval={'preserveEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="users"
                      stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="org"
                      stroke="red" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Container>

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home