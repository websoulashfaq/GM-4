import React from 'react'
import './OrganizerDetails.css'




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
                      <img src={OrgImg} alt="" />
                    </div>
                    <div className='org_buttons'>
                      <button style={{ backgroundColor: '#FF0000' }} onClick={handleOpen} >Block Organizer</button>

                    </div>

                    {/* modal start */}

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Block Organizer
                        </Typography>
                        <hr />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Are you sure you want to Block this Organizer
                        </Typography>
                        <hr />
                        <div className='modal_buttons'>
                          <button className='modalNo' onClick={handleClose}>No</button>
                          <button>Yes</button>
                        </div>
                      </Box>
                    </Modal>
                    {/* modal end */}
                  </Grid>


                  <Grid xl={7} className="org_descripion">
                    <div className='org-name-andButton'>
                      <h1>Jhone Alexander</h1>
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
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>Total tournaments conducted</td>
                          <td>11</td>
                        </tr>
                        <tr>
                          <td>Total Scrims conducted</td>
                          <td>29</td>
                        </tr>
                        <tr>
                          <td>Total opened rooms</td>
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





      <Footer />

    </div>
  )
}

export default OrganizerDetails