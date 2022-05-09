import React, { useState, useEffect } from 'react'
import './OrganizerDetails.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'


//meterail ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';


//modal import 

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


//org image

import OrgImg from '../../../assets/images/orgimg.jpg'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import OrginImage1 from '../../../assets/images/orguser.jpg'

//grid style
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


//modal style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};





const OrganizerDetails = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [orginInfo, setOrginIfo] = useState();
  const [conductedTournament, setConductedTournament] = useState();
  const [conductedScrims, setConductedScrims] = useState()
  const [totalOpenRooms, setTotalOpenRooms] = useState()
  const [totalDailyMatch, setTotalDailyMatch] = useState()

  const { id } = useParams();
  const adminId = localStorage.getItem("adminId");


  const blockOriginAPI = (data) => {
    return axios({
      method: "PUT",
      url: `https://gm4-server.herokuapp.com/api/admin/update/user/${id}/${adminId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: data
    })
      .then((res) => {
        return res
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  }

  const blockOrgin = () => {
    blockOriginAPI({ status: "Blocked" })
      .then((res) => {
        console.log(res)
        handleClose();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //Active
  const activeOrg = () => {
    blockOriginAPI({ status: "Active" })
      .then((res) => {
        console.log(res)
        handleClose();
      })
      .catch((err) => {
        console.log(err)
      })
  }


  //Total daily match conducted
  const getTotalDailyMatchesCondected = async () => {

    let url = `https://gm4-server.herokuapp.com/api/admin/count/matches/organiser/${id}/${adminId}`;
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
      setTotalDailyMatch(response.data.count)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  //get toal oprn rooms
  const getTotalOpenRoom = async () => {

    let url = `https://gm4-server.herokuapp.com/api/admin/count/scrims/organiser/${id}/${adminId}`;
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
      setTotalOpenRooms(response.data.count)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  // Scrims
  const getTotalScrimsconducted = async () => {

    let url = `https://gm4-server.herokuapp.com/api/admin/count/scrims/organiser/${id}/${adminId}`;
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
      setConductedScrims(response.data.count)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  //Total tournemets
  const getTotalCouductedTournement = async () => {

    let url = `https://gm4-server.herokuapp.com/api/admin/count/tournaments/organiser/${id}/${adminId}`;
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
      setConductedTournament(response.data.count)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  const getOrganizerDetails = async () => {

    let url = `https://gm4-server.herokuapp.com/api/admin/read/user/profile/${id}/${adminId}`;
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
      setOrginIfo(response.data)
    } catch (error) {
      alert(error.respose.data.error);
    }

  }
  useEffect(() => {
    getOrganizerDetails();
    getTotalCouductedTournement();
    getTotalScrimsconducted();
    getTotalOpenRoom();
    getTotalDailyMatchesCondected();
  }, [orginInfo])

  return (
    <div>
      <Header />
      {/* <h1>Organizer Details</h1> */}
      {/* userdetails card */}
      <Container maxWidth="xl">
        <div className='singelCard'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xl={9} lg={8} md={9} sm={10} xs={12}>
                <Grid className="orgDetails">
                  <Grid xl={5} className="orgImgeDetails">
                    <div className='org_img'>
                      <img src={`https://gm4-server.herokuapp.com/api/admin/get/image/user/${id}/${adminId}`} alt="organizer" />
                    </div>
                    <div className='org_buttons'>
                      {
                        orginInfo && orginInfo.status === "Blocked" ? (

                          <button style={{ backgroundColor: '#FF0000' }} onClick={handleOpen}>Blocked</button>
                        ) : (

                          <button style={{ backgroundColor: '#FF0000' }} onClick={handleOpen}>Active Now</button>
                        )
                      }

                    </div>

                    {/* modal start */}

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                          {orginInfo && orginInfo.status === "Active" ? "Block Organizer" : "Active Organizer"}
                        </Typography> */}
                        <hr />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Are you sure you want to {orginInfo && orginInfo.status === "Active" ? "Block " : "Active "} this Organizer
                        </Typography>
                        <hr />
                        <div className='modal_buttons'>
                          <button className='modalNo' onClick={handleClose}>No</button>
                          {
                            orginInfo && orginInfo.status === "Active" ? (
                              <button onClick={blockOrgin}>Block</button>
                            ) : (
                              <button onClick={activeOrg}>Active</button>
                            )
                          }
                        </div>
                      </Box>
                    </Modal>
                    {/* modal end */}
                  </Grid>


                  <Grid xl={7} className="org_descripion">
                    <div className='org-name-andButton'>
                      <h1>{orginInfo && orginInfo.firstName} {orginInfo && orginInfo.lastName}</h1>
                    </div>
                    <div className='location'>
                      <span class="material-icons">location_on</span>
                      <p>Calicut</p>
                    </div>
                    <hr />

                    {/* user matches history table */}
                    <table class="uk-table uk-table-hover uk-table-divider">
                      <thead>
                        <tr>
                          <th>Details</th>
                          <th>number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Total daily match conducted</td>
                          <td>{totalDailyMatch && totalDailyMatch}</td>
                        </tr>
                        <tr>
                          <td>Total tournaments conducted</td>
                          <td>{conductedTournament && conductedTournament}</td>
                        </tr>
                        <tr>
                          <td>Total Scrims conducted</td>
                          <td>{conductedScrims && conductedScrims}</td>
                        </tr>
                        <tr>
                          <td>Total opened rooms</td>
                          <td>{totalOpenRooms && totalOpenRooms}</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* user matches history table end */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
      {/* userCard end */}





      <Footer />

    </div>
  )
}

export default OrganizerDetails