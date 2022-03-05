import React from 'react'
import './Notifications.css'
import img1 from '../../assets/images/notification/zYxDCQT.jpg'
import img2 from '../../assets/images/notification/w4Mp4ny.jpg'
import img3 from  '../../assets/images/notification/CtAQDCP.jpg'


const Notifications = () => {
  return (
    <div className='notification-bg'>

<div className='idp-head-bg'>

<h1>Notification</h1>
</div>

{/* first card */}

<div className="notification-list">
        <div className="notification-list_img">
          <img src={img1} alt="user" />
        </div>
        <div className="notification-list_detail">
          <p><b>John Doe </b>  reacted to your post</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam enim reiciendis in? Quia mollitia  excepturi!</p>
          <p><small>10 mins ago</small></p>
        </div>
      </div>
{/* second card */}
      <div className="notification-list">
        <div className="notification-list_img">
          <img src={img3} alt="user" />
        </div>
        <div className="notification-list_detail">
          <p><b>John Doe</b> liked to your post</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam enim reiciendis in? Quia mollitia  excepturi!</p>
          <p><small>10 mins ago</small></p>
        </div>
      </div>

      {/* third card */}
      <div className="notification-list">
        <div className="notification-list_img">
          <img src={img1} alt="user" />
        </div>
        <div className="notification-list_detail">
          <p><b>John Doe</b> commented on your post</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam enim reiciendis in? Quia mollitia  excepturi!</p>
          <p><small>10 mins ago</small></p>
        </div>
      </div>
{/* fourth card */}
      <div className="notification-list">
        <div className="notification-list_img">
          <img src={img2} alt="user" />
        </div>
        <div className="notification-list_detail">
          <p><b>John Doe</b> reacted to your post</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam enim reiciendis in? Quia mollitia  excepturi!</p>
          <p><small>10 mins ago</small></p>
        </div>
       
      </div>

      
       
      
      
      
    </div>
    
  )
}

export default Notifications