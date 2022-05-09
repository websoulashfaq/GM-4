import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './EditProfile.css'
import { autocompleteClasses, Badge, Button } from '@mui/material';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import { useFormik } from 'formik';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom'

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const EditProfile = () => {

  {/*Modal functions */ }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/admin/profile');


  {/*Modal style */ }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  {/*Form Validation section*/ }


  // const formik = useFormik({

  //   initialValues: {

  //     username: ' ',

  //     email: '',

  //     mobile: ''

  //   },

  //   validationSchema: yup.object({

  //     Photoupload: yup.mixed()

  //       .required('**Profile Photo required..'),

  //     username: yup.string()

  //       .max(20, 'Name should not exceed 20 Characters')

  //       .required(' **User Name required'),


  //     email: yup.string()

  //       .email('Invalid email address')

  //       .required('**Email Id required'),

  //     mobile: yup.string()

  //       .min(10, '')

  //       .required('**Phone number required'),


  //   }),

  //   onSubmit: values => {

  //     console.log(values)

  //     // handleOpen();
  //   }
  // });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [file, setFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);


  {/*File upload event */ }

  const handleImageChange = (event) => {
    setFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const updateAdmin = async (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("mobile", mobile);
    if (isFilePicked) {
      formdata.append("photo", file)
    }

    let url = `https://gm4-server.herokuapp.com/api/admin/edit/profile/${localStorage.getItem("adminId")}`;
    const options = {
      method: "PUT",
      url: url,
      headers: {
        'Content-Type': "Application/json",
        'Authorization': "Bearer " + localStorage.getItem("token")
      },
      data: formdata
    }
    try {
      axios(options).then((res) => {
        console.log(res.data)
        handleOpen()
      })
    } catch (error) {
      alert(error.response.data.error.message);
      console.log(error.response.data)
    }
  }

  const getUserInfo = async () => {
    const adminId = localStorage.getItem('adminId');
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
      setUsername(response.data.username);
      setEmail(response.data.email);
      setMobile(response.data.mobile);

    } catch (error) {
      alert(error.response.data.error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])



  return (

    <div className='admin-editprofile'>
      <Header />

      {/* Edit Profile page header */}

      <div className='admin-profile-header'>
        <h1>Profile</h1>
      </div>

      {/*Edit Profile page form  */}

      <div>
        <form className='AdminEditprofile-Form' onSubmit={updateAdmin} >

          <h2 class="admin-editprofile-head">Edit profile</h2>
          <fieldset className="uk-fieldset">
            <hr />
            <div className="uk-margin">

              {/*Edit Profile Photo upload*/}
              <p>
                <center>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    id="upload"
                    accept="image/*"
                    name="file"
                    style={{ display: "none" }}
                    required=""
                  />
                  <label htmlFor="upload">

                    <IconButton color="primary" aria-label="upload picture" component="span" >

                      <Badge badgeContent={<CameraAltTwoToneIcon />}
                        anchorOrigin={{

                          horizontal: 'right',
                          vertical: 'bottom'

                        }} >

                        <Avatar id="avatar" src={file ? URL.createObjectURL(file) : ""}

                          style={{
                            width: "80px",
                            height: "80px",
                          }} />

                      </Badge>
                    </IconButton>
                  </label>

                  <label htmlFor="avatar" />

                </center>

                {/*Photo upload validation */}

                {/* {formik.errors.Photoupload ?

                  <span style={{ color: 'red', fontSize: '12px', fontWeight: '700', }}>
                    {formik.errors.Photoupload}</span> : null} */}

              </p>


              {/*Edit Profile input field */}

              <input
                class="uk-input"
                type="text"
                name='username'
                placeholder='Enter username'
                // {...formik.getFieldProps("username")}
                required=""
                value={username && username}
                onChange={(e) => setUsername(e.target.value)}
              />

              {/* {formik.errors.Username ? <span style={{ color: 'red', float: 'left', fontSize: '12px', fontWeight: '700' }}>
                {formik.errors.Username}</span> : null} */}

            </div>

            <div class="uk-margin">
              <input
                class="uk-input"
                type="email"
                name='email'
                placeholder='Enter email id'
                // {...formik.getFieldProps("email")}
                required=""
                value={email && email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* {formik.errors.EmailId ?
                <span style={{ color: 'red', fontSize: '12px', fontWeight: '700', float: 'left' }}>
                  {formik.errors.EmailId}</span> : null} */}
            </div>

            <div class="uk-margin">
              <input
                class="uk-input"
                type="text"
                name='mobile'
                placeholder='Enter phone number'
                minLength={10}
                // {...formik.getFieldProps("mobile")}
                required=""
                pattern="[789][0-9]{9}"
                value={mobile && mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              {/* {formik.errors.Phonenumber ?
                <span style={{ color: 'red', fontSize: '12px', fontWeight: '700', float: 'left' }}>{formik.errors.Phonenumber}</span> : null} */}

            </div>

            <div>
              <Button type='submit' id="but1">Save</Button>

            </div>
          </fieldset>

          {/*Modal */}


          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="adminep-modal-title"
            aria-describedby="adminep-modal-description" >
            <Box sx={style} className='adminep-modal_box' >

              <Typography id="adminep-modal-description" className='rules_modal'   >

                <h3>Profile updated</h3>
                <span style={{ letterSpacing: 'none' }}>Your profile is updates Successfully!</span>
                <br />

                <div className='adminep-button_area'>
                  <button onClick={handleNavigate} className='adminep-modal_close'>Ok</button>
                </div>

              </Typography>
            </Box>

          </Modal>




        </form>



        {/*<div id="modal-close-react" data-uk-modal>
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
       
        <button className="uk-modal-close-default" type="button" data-uk-close></button>
        <p style={{ fontSize:'15px'}}> Successfully updated your profile</p>

    </div>
          </div>   */}





      </div>
      <Footer />
    </div>



  )
}


export default EditProfile