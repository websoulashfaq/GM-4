import React from 'react'
import './ResetPage.css'
import { useForm } from 'react-hook-form';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const ResetPage = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    reset();
  };
  console.log(errors);
  return (
    <div>
      <Header/>
     <div class="container-reset">  
  <form id="contact"onSubmit={handleSubmit(onSubmit)}>
    
    <fieldset id='fieldset-style'>
      <input placeholder="New Password" type="password" tabindex="1"  name='password'  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft4'>{errors.password.message}</span>)}
    </fieldset>
    <fieldset id='fieldset-style'>
      <input placeholder="Confirm Password" type="password" tabindex="1"  name='password'  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft5'>{errors.password.message}</span>)}
    </fieldset>
    
    <fieldset id='fieldset-style'>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Reset Password</button>
    </fieldset>
  </form>
</div>

<Footer/>
    </div>
  )
}

export default ResetPage