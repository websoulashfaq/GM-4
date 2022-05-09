import React from 'react'
import './ForgotPassword.css'
import axios from 'axios'
import { useForm } from 'react-hook-form'; 
const ForgotPassword = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const onSubmit = async (data) => {
    let url = 'https://gm4-server.herokuapp.com/api/admin/password/change/send/mail';
    const options = {
      method: "POST",
      url: url,
      body:{
        email:data.email
      }
    }
    try {
      const response = await axios(options);
      console.log(response)
    } catch (error) {
      alert(error);
    }
    reset();
  };
  console.log(errors);
  return (
    <div>
      <div class="container-frgt">
        <form id="contact" onSubmit={handleSubmit(onSubmit)}>

          <fieldset id='fieldset-style'>
            <input placeholder=" Enter Your Registered Email Address" type="email" tabindex="1" name='email' {...register("email", { required: "** Email is Required" })} autoComplete='off' />   {errors.email && (<span className='errormsgleft3-1'>{errors.email.message}</span>)}
          </fieldset>

          <fieldset id='fieldset-style' >
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Reset Password</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword