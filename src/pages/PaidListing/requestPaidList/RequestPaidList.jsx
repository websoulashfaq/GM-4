import React, { useEffect, useState } from 'react'
import './RequestPaidList.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const RequestPaidList = () => {
  const [requstList, setRequstList] = useState([])
  const adminId = localStorage.getItem('adminId');
  //get All Requst List
  const getAllRequstList = async () => {
    let url = `https://gm4-server.herokuapp.com/api/admin/view/pending/paidlist/${adminId}`
    const options = {
      method: "GET",
      url: url,
      headers: {
        'Authorization': "Bearer " + localStorage.getItem("token")
      }
    }
    try {
      const response = await axios(options);
      setRequstList(response.data.ads)
    } catch (error) {
      console.log(error.response.data)
    }

  }
  useEffect(() => {
    getAllRequstList();
  }, [])
  console.log(requstList)
  return (
    <div className='reqPaidlist-mainwrapper'>
      <Header />
      {/* This div is for wrapping the header section */}
      <div className='reqPaidlist_headding'>
        <div className='emptyheadingdiv'>

        </div>
        <h1>PAID LIST REQUESTS</h1>
      </div>
      {/*This div wrap the table*/}
      <div className='reqPaidlist_container'>
        <table class="uk-table uk-table-divider">
          <thead>
            <tr>
              <th>#</th>
              <th>Organization Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              requstList && requstList.map((data) => {
                let date = new Date(data.createdAt);
                let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
                return (
                  <tr key={data._id}>
                    <td>1</td>
                    <td>{data.organiserName}</td>
                    <td>{dateMDY}</td>
                    {/* link to request details page*/}
                    <td><Link to={`/admin/request/details/${data._id}`}><button>View Details</button></Link></td>
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

export default RequestPaidList