import React, { useState, useEffect } from 'react'
import './UserDetails.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';


//meterail ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

//modal import 

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//button navigation 
import { useNavigate } from 'react-router-dom';



//user image
import user from '../../../assets/userList/user1.jpg'
import scam from '../../../assets/userList/scam.png'

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

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




const UserDetails = () => {
  //modal functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [ScamOpen, setScamOpen] = React.useState(false);
  const ScamOpenn = () => setScamOpen(true);
  const handleScamClose = () => setScamOpen(false)


  //navigate
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});
  const [bookedTounemets, setBookedTounemets] = useState();
  const [attendedTornements, setAttendedTornements] = useState()
  const [attendedScrims, setAttendedScrims] = useState()
  const [totalMatch, setTotalMatch] = useState()

  const { id } = useParams();
  const adminId = localStorage.getItem("adminId")

  //black user
  const blockUserAPI = (data) => {
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

  const blockUser = () => {
    blockUserAPI({ status: "Blocked" })
      .then((res) => {
        console.log(res)
        handleClose();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const activeUser = () => {
    blockUserAPI({ status: "Active" })
      .then((res) => {
        console.log(res)
        handleClose();
      })
      .catch((err) => {
        console.log(err)
      })
  }



  //get total match Attended
  const getTotalMatchAttended = async () => {
    let url = `https://gm4-server.herokuapp.com/api/admin/count/matches/user/${id}/${adminId}`;
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
      setTotalMatch(response.data)
    } catch (error) {
      alert(error.response.data.error)
    }
  }


  //get attended scrims
  const getAttendedScrims = async () => {
    let url = `https://gm4-server.herokuapp.com/api/admin/count/scrims/user/${id}/${adminId}`;
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
      setAttendedScrims(response.data)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  //get attended tournements
  const getAttendedTournements = async () => {
    let url = `https://gm4-server.herokuapp.com/api/admin/count/tournaments/user/${id}/${adminId}`;
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
      setAttendedTornements(response.data)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  //get user booked tournememnts
  const getBookedTounements = async () => {
    let url = `https://gm4-server.herokuapp.com/api/admin/view/booked/tournaments/${id}/${adminId}`;
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
      setBookedTounemets(response.data)
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  //get user profile
  const getUserInfo = async () => {
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
      setUserInfo(response.data)
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  useEffect(() => {
    getUserInfo();
    getBookedTounements();
    getAttendedTournements();
    getAttendedScrims();
    getTotalMatchAttended();
  }, [userInfo])

  return (
    <div>
      <Header />
      {/* userDetails header */}
      <div className='userDetails_header'>
        <h1 className='userHeader_text' >user details</h1>
        <h1 id='userHeader_text'>user details</h1>
      </div>

      {/* userdetails card */}
      <Container maxWidth="xl"  >
        <div className='user_details-singelCard'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xl={9} lg={8} md={9} sm={10} xs={12}>
                <Grid className="userdetails-userDetails">
                  <Grid xl={5} className="userdetails-userImgeDetails">
                    {/* user image */}
                    <div className='userdetails-user_img'>
                      <img src={`https://gm4-server.herokuapp.com/api/admin/get/image/user/${id}/${adminId}`} alt="userPhoto" />
                    </div>
                    {/* end user image */}

                    {/* action buttons */}
                    <div className='userdetials-user_buttons'>
                      {
                        userInfo && userInfo.status === "Active" ? (
                          <button style={{ backgroundColor: '#FF0000' }} onClick={handleOpen} >Active now</button>
                        ) : (
                          <button style={{ backgroundColor: '#FF0000' }} onClick={handleOpen} >Blocked</button>
                        )
                      }
                      <button style={{ backgroundColor: '#FF0000' }} onClick={ScamOpenn}>Scam</button>
                      <Link to={`/admin/usertournament/${userInfo._id}`} className="tournement_link">Booked Tournaments</Link>
                    </div>
                    {/* end aactions buttons section */}


                    {/* block modal  start */}

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"

                    >
                      <Box sx={style} className="modal_User">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          {""}
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Are you sure you want to {userInfo && userInfo.status === "Active" ? "Block" : "Active"} this user
                        </Typography>
                        <hr />
                        <div className='userdetails-modal_buttons'>
                          <button className='modalNo' onClick={handleClose}>No</button>
                          {
                            userInfo && userInfo.status === "Active" ? (
                              <button onClick={blockUser} className='modalYess'>Block</button>
                            ) : (
                              <button onClick={activeUser} className='modalYess'>Active</button>
                            )
                          }
                        </div>
                      </Box>
                    </Modal>
                    {/* block modal end */}

                    {/* scam modal  start */}

                    <Modal
                      open={ScamOpen}
                      onClose={handleScamClose}
                      aria-labelledby="modal-modal-title"
                      id="modal_shyam"
                    >
                      <Box sx={style} className="modal_User">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Block user
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Are you sure you want to report scam this user
                        </Typography>
                        <div class="admin-alert_image">
                          <img src={scam} alt="" />

                        </div>
                        <hr />
                        <div className='userdetailsmodal_buttons'>
                          <button className='modalNo' onClick={handleScamClose}>No</button>
                          <button className='modalYess'>Yes</button>
                        </div>
                      </Box>
                    </Modal>
                    {/* scam modal end */}

                  </Grid>
                  <Grid xl={7} className="userdetails-user_descripion">
                    <div className='userdetail-user-name-andButton'>
                      {/* user name */}
                      <h1> {userInfo && userInfo.firstName} {userInfo && userInfo.lastName}</h1>
                      {/* user name */}
                    </div>
                    {/* user location */}
                    <div className='userdetail-location'>
                      <span class="material-icons">location_on</span>
                      <p>calicut</p>
                    </div>
                    {/* end user Location */}

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
                          <td>Total tournaments attended</td>
                          <td>{attendedTornements && attendedTornements}</td>
                        </tr>
                        <tr>
                          <td>Number of Tournament Own </td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>Total match attended</td>
                          <td>{totalMatch && totalMatch}</td>
                        </tr>
                        <tr>
                          <td>Total Scrims attended</td>
                          <td>{attendedScrims && attendedScrims}</td>
                        </tr>
                        <tr>
                          <td>Booked Tournaments</td>
                          <td>{bookedTounemets && bookedTounemets}</td>
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


      <Footer />
    </div>
  )
}

export default UserDetails