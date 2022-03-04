import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
const Login = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    reset();
  };
  return (
    <div className='admin-login'>
     
      <div className="container-adm">
        <div className="wrapper">
          <div className="title"><span>Login </span></div>

          {/* login form */}
          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* icon */}
              <i className="fa fa-user" />
              <input type="text" placeholder="Email or Phone" name='email'  {...register("email", { required: "** Email is Required" })}  autoComplete='off'/>   {errors.email && (<span className='errormsgleft4-1'>{errors.email.message}</span>)}
            </div>
            <div className="row">
              {/* icon */}
              <i className="fa fa-lock" />
              <input type="password" placeholder="Password" name='password' {...register("password", { required: "**Password is Required" })}  autoComplete='off'/>   {errors.password && (<span className='errormsgleft4-2'>{errors.password.message}</span>)}
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