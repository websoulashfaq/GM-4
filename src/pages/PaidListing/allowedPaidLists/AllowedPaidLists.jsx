import React from 'react'
import './AllowedPaidLists.css'

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const AllowedPaidLists = () => {
  
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
            <tr>
              <td>1</td>
              <td>ORG1</td>
              <td>10-02-2022</td>
              <td><button>YES</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>ORG2</td>
              <td>11-02-2022</td>
              <td><button>YES</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>ORG3</td>
              <td>12-02-2022</td>
              <td><button>YES</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default AllowedPaidLists