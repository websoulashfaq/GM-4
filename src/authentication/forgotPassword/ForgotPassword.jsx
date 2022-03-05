import React from 'react'
import './ForgotPassword.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
const ForgotPassword = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    reset();
  };
  console.log(errors);
  return (
    <div>
      {/* <Link to="/admin/reset/password">Reset</Link> */}
      <div class="container-frgt">  
  <form id="contact" onSubmit={handleSubmit(onSubmit)}>
    
    <fieldset id='fieldset-style'>
      <input placeholder=" Enter Your Registered Email Address" type="email" tabindex="1" name='email' {...register("email", { required: "** Email is Required" })}  autoComplete='off'/>   {errors.email && (<span className='errormsgleft3-1'>{errors.email.message}</span>)}
    </fieldset>
    
    <fieldset  id='fieldset-style' >
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Reset Password</button>
    </fieldset>
  </form>
</div>
    </div>
  )
}

export default ForgotPassword