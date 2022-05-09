import React, { useEffect, useState } from 'react'
import './ChangePassword.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'


const ChangePassword = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: '',
    cPassword: "",
    newPassword: ""
  })

  const [errField, setErrField] = useState({
    emailErr: "",
    passwordErr: "",
    newPasswordErr: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 5,


  };

  function onFormSubmit(event) {
    event.preventDefault();
    if (validForm()) {

      let url = `https://gm4-server.herokuapp.com/api/admin/change/password`;
      let options = {
        method: 'PUT',
        url: url,
        headers: {
          'Content-Type': "Application/json",
          'Authorization': "Bearer " + localStorage.getItem("token")
        },
        data: {
          email: formValue.email,
          password: formValue.cPassword,
          newpassword: formValue.newPassword
        }
      }
      try {
        axios(options).then((res) => {
          console.log(res)
          handleOpen()
          setFormValue({
            cPassword: "",
            newPassword: ""
          })
          return false
        }).catch((err) => {
          alert(err.response.data.error)
          setFormValue({
            cPassword: ""
          })
        })
      } catch (error) {
        alert(error.response.data.error);
      }
    } else {
      alert("Please enter correct values")
      // console.log(errField)
    }
  }


  const validForm = () => {
    var formIsValid = true
    const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    setErrField({
      emailErr: "",
      passwordErr: "",
      newPasswordErr: ""
    })

    if (formValue.email === "") {
      formIsValid = false;
      setErrField(pre => ({
        ...pre, emailErr: "Please enter email **"
      }))
    }

    if (formValue !== "" && !validEmailRegex.test(formValue.email)) {
      formIsValid = false;
      setErrField(pre => ({
        ...pre, emailErr: "Please enter Email in correct format **"
      }))
    }
    if (formValue.cPassword == "") {
      formIsValid = false;
      setErrField(pre => ({
        ...pre, passwordErr: "Please enter current password **"
      }))
    }


    if (formValue.newPassword == "") {
      formIsValid = false;
      setErrField(pre => ({
        ...pre, newPasswordErr: "Please enter new password **"
      }))
    }

    if (formValue.newPassword.length < 8) {
      formIsValid = false;
      setErrField(pre => ({
        ...pre, newPasswordErr: "minimum 8 charecters **"
      }))
    }

    return formIsValid;
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
      setFormValue({
        email: response.data.email
      })

    } catch (error) {
      alert(error.response.data.error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <div className='AdminChangepass'  >
      <Header />

      {/*admin change password header */}

      <div className='admin-changepass-header '>
        <h1>Change Password</h1>
      </div>

      {/*admin change password form */}

      <div >
        <form className='AdminChangepassForm' onSubmit={onFormSubmit}>
          <fieldset class="uk-fieldset">

            <div class="uk-margin">
              <input
                class="uk-input"
                name='email'
                value={formValue.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter Email"
                required=""
              />
            </div>
            {/* validation error */}
            <div className="invalid-feedback" >
              {errField.emailErr.length > 0 && errField.emailErr}
            </div>

            <div class="uk-margin">
              <input
                class="uk-input"
                name="cPassword"
                value={formValue.cPassword}
                onChange={handleChange}
                type="password"
                placeholder="Current Password"
                required=""
              />
            </div>
            {/* fromvalidation */}
            <div className="invalid-feedback" >
              {errField.passwordErr.length > 0 && errField.passwordErr}
            </div>

            <div class="uk-margin">
              <input
                class="uk-input"
                name="newPassword"
                value={formValue.newPassword}
                onChange={handleChange}
                type="password"
                placeholder="New password"
                required=""
              />
              {/* fromvalidation */}
              <div className="invalid-feedback" >
                {errField.newPasswordErr.length > 0 && errField.newPasswordErr}
              </div>

            </div>

            <div>
              <button class="AdminChangepassButton">Save</button>
            </div>
          </fieldset>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="admincp-modal-title"
            aria-describedby="admincp-modal-description">
            <Box sx={style} className='admincp-modal_box'>

              <Typography id="admincp-modal-description" className='rules_modal'  >

                <h3>Password changed</h3>

                <span style={{ letterSpacing: 'none' }}>Your password changed Successfully!</span>
                <br />

              </Typography>
              <div className='admin-changepass-button_area'>
                <button onClick={handleClose} className='admincp-modal_close'>Ok</button>

              </div>

            </Box>
          </Modal>


        </form>



      </div>
      <Footer />
    </div>
  )
}


export default ChangePassword