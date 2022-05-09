import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Token } from '@mui/icons-material';
import { options } from 'uikit';
const Login = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let url = 'https://gm4-server.herokuapp.com/api/admin/signin'
    const options = {
      method: 'POST',
      url: url,
      data: {
        email: data.email,
        password: data.password
      }
    }
    try {
      const response = await axios(options);
      localStorage.setItem("adminId", response.data.admin._id);
      localStorage.setItem("adminName", response.data.admin.name);
      localStorage.setItem("token", response.data.token);
      alert(response.data.message);
      navigate('/')
    } catch (error) {
      alert(error.response.data.error);
    }
    reset();
  };
  return (
    <div className='admin-login'>

      <div className="container-adm">
        <div className="wrapper">
          <div className="title"><span>Login </span></div>

          {/* login form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* icon */}
              <i className="fa fa-user" />
              <input type="email" placeholder="Email" name='email'  {...register("email", { required: "** Email is Required" })} autoComplete='off' />   {errors.email && (<span className='errormsgleft4-1'>{errors.email.message}</span>)}
            </div>
            <div className="row">
              {/* icon */}
              <i className="fa fa-lock" />
              <input type="password" placeholder="Password" name='password' {...register("password", { required: "**Password is Required" })} autoComplete='off' />   {errors.password && (<span className='errormsgleft4-2'>{errors.password.message}</span>)}
            </div>
            <Link to="/admin/forgotpassword">
              <div className="pass"><a href="/admin/forgotpassword">Forgot password?</a></div>
            </Link>
            <div className="row-btn">

              <button className='admin-log-btn' name="submit" type="submit" id="contact-submit" data-submit="...Sending">LOGIN</button>

            </div>

          </form>
        </div>





      </div>
    </div>
  )
}

export default Login