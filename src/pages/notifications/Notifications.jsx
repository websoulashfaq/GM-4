import React, { useEffect, useState } from 'react'
import './Notifications.css'
import img1 from '../../assets/images/notification/zYxDCQT.jpg'
import img2 from '../../assets/images/notification/w4Mp4ny.jpg'
import img3 from '../../assets/images/notification/CtAQDCP.jpg'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import axios from 'axios';

const Notifications = () => {

  const [notifications, setNotifications] = useState([])

  //get All notifications
  const adminNotification = async () => {
    const adminId = localStorage.getItem("adminId");
    let url = `https://gm4-server.herokuapp.com/api/admin/view/notifications/${adminId}`;
    const options = {
      method: "GET",
      url: url,
      headers: {
        'Content-Type': "Application/json",
        'Authorization': "Bearer " + localStorage.getItem("token")
      },
    }
    try {
      const response = await axios(options);
      setNotifications(response.data)
    } catch (error) {
      alert(error.response.data.error);
    }

  }

  useEffect(() => {
    adminNotification();
  }, [])

  return (
    <div className='notification-bg'>
      <Header />

      <div className='idp-head-bg'>

        <h1>Notification</h1>
      </div>

      {/* first card */}
      {
        notifications && notifications.length !== 0 ? (
          notifications && notifications.map((item, key) => {
            return (
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
            )
          })

        ) : <div style={{ padding: "50px", height: "50vh" }}>
          <p style={{ padding: "10px", color: '#111', fontWeight: '600', display: "flex", position: "absolute", left: "45%" }}>No Notifications!</p>
        </div>
      }



      <Footer />

    </div >

  )
}

export default Notifications