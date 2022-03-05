import React from 'react'
import './RequestPaidList.css'
import { Link } from 'react-router-dom'

const RequestPaidList = () => {
  return (
    <div className='reqPaidlist-mainwrapper'>
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
              <tr>
                  <td>1</td>
                  <td>ORG1</td>
                  <td>10-02-2022</td>
                  {/* link to request details page*/}
                  <td><Link to={'/admin/request/details'}><button>View Details</button></Link></td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>ORG2</td>
                  <td>11-02-2022</td>
                  <td><Link to={'/admin/request/details'}><button>View Details</button></Link></td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>ORG3</td>
                  <td>12-02-2022</td>
                  <td><Link to={'/admin/request/details'}><button>View Details</button></Link></td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RequestPaidList