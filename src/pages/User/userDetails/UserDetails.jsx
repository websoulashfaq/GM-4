import React from 'react'
import './UserDetails.css'
import { Link } from 'react-router-dom'



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
  borderRadius:2,
  boxShadow: 24,
  p: 4,
};




const UserDetails = () => {
  //modal functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [ScamOpen, setScamOpen] = React.useState(false);
  const ScamOpenn=()=> setScamOpen(true) ;
  const handleScamClose=()=> setScamOpen(false)
  

  //navigate
  const navigate = useNavigate();

  return (
    <div>
      {/* userDetails header */}
      <div className='userDetails_header'>
                <h1 className='userHeader_text' >user details</h1>
                <h1  id='userHeader_text'>user details</h1>
            </div>

      {/* userdetails card */}
      <Container maxWidth="xl">
        <div className='user_details-singelCard'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xl={9} lg={8} md={9} sm={10} xs={12}>
                <Grid className="userdetails-userDetails">
                  <Grid xl={5} className="userdetails-userImgeDetails">
                    {/* user image */}
                    <div className='userdetails-user_img'>
                      <img src={user} alt="" />
                    </div>
                    {/* end user image */}

                    {/* action buttons */}
                    <div className='userdetials-user_buttons'>
                      <button style={{ backgroundColor: '#FF0000' }} onClick={handleOpen} >Block User</button>
                      <button style={{ backgroundColor: '#FF0000' }}  onClick={ScamOpenn}>Scam</button>
                      <button onClick={(()=>{navigate('/admin/usertournament');})}>Booked Tournaments</button>
                    </div>
                    {/* end aactions buttons section */}


                    {/* block modal  start */}
                    
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Block user
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to Block this user
                        </Typography>
                        <hr />
                        <div className='userdetails-modal_buttons'>
                          <button className='modalNo' onClick={handleClose}>No</button>
                          <button>Yes</button>
                        </div>
                      </Box>
                    </Modal>
                    {/* block modal end */}

                    {/* scam modal  start */}
                    
                    <Modal
                      open={ScamOpen}
                      onClose={handleScamClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
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
                          <button>Yes</button> 
                        </div>
                      </Box>
                    </Modal>
                    {/* scam modal end */}

                  </Grid>
                  <Grid xl={7} className="userdetails-user_descripion">
                    <div className='userdetail-user-name-andButton'>
                      {/* user name */}
                      <h1>Jhone Alexander</h1>
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
                          <td>10</td>
                        </tr>
                        <tr>
                          <td>Number of Tournament Own </td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>Total match attended</td>
                          <td>11</td>
                        </tr>
                        <tr>
                          <td>Total Scrims attended</td>
                          <td>29</td>
                        </tr>
                        <tr>
                          <td>Booked Tournaments</td>
                          <td>4</td>
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





      
      <Link to="/admin/usertournament">booked tournament</Link>
      <Link to="/admin/action"> BlockUser</Link>
      <Link to="/admin/action"> Scam</Link>
    </div>
  )
}

export default UserDetails