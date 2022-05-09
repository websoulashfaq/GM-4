import React, { useEffect, useState } from 'react'
import './AllowedPaidLists.css'

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import axios from 'axios'

const AllowedPaidLists = () => {
  const [allAllowedList, setAllAllowedList] = useState([])

  //get Allowed paid List
  const adminId = localStorage.getItem('adminId');
  const getAllAllowed = async () => {
    let url = `https://gm4-server.herokuapp.com/api/admin/view/approved/paidlist/${adminId}`
    const options = {
      method: "GET",
      url: url,
      headers: {
        'Authorization': "Bearer " + localStorage.getItem("token")
      }
    }
    try {
      const response = await axios(options)
      setAllAllowedList(response.data.ads)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getAllAllowed();
  }, [])


  return (
    <div className='allowedPaidlist_main-wrapper'>
      <Header />
      {/* This div is for wrapping the header section */}
      <div className='allowedPaidlist_headding'>
        <div className='allowedPaidlist_emptyheadingdiv'>

        </div>
        <h1>APPROVED PAID LISTS</h1>
      </div>
      <div className='allowedPaidlist_container'>
        {/*This div wrap the table*/}
        <table class="uk-table uk-table-divider">
          <thead>
            <tr>
              <th>#</th>
              <th>Organization Name</th>
              <th>Payment Date</th>
              <th>Amount Status</th>
            </tr>
          </thead>
          <tbody>
            {
              allAllowedList && allAllowedList.map((data) => {
                let date = new Date(data.createdAt);
                let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                return (
                  <tr key={data._id}>
                    <td>1</td>
                    <td>{data.organiserName}</td>
                    <td>{dateMDY}</td>
                    <td><button>YES</button></td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default AllowedPaidLists