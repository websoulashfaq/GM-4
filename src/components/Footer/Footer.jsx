import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom'
import fimg from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <div>
      <div className='footer_wrapper1'>
        <div className='footer_row_1'>
          <div className='footer_innersub_row_1'>
            <div className='footer_innerdiv-logo-content footer_innerdiv'>
              <div className='footer_innerdiv-image-logo'>
                <img src={fimg} alt="footer_image" />
              </div>
              <div className='footer_innerdiv-logo_text'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, corrupti fugit nemo sapiente</p>
              </div>
            </div>
            <div className='footer_innerdiv-important-links footer_innerdiv'>
              <div className='footer_innerdiv-important-links-heading'>
                <h4>IMPORTANT LINKS</h4>
              </div>
              <div className='footer_innerdiv-important-links_links'>
                {/* Footer list one start*/}
                <ul>
                  <li><Link className='admin_footer_link' style={{ textDecoration: 'none' }} to="/admin/request/paidlist">Request paid list</Link></li>
                  <li><Link className='admin_footer_link' style={{ textDecoration: 'none' }} to="/admin/allowed/paidlist">Approved paid list </Link></li>
                  <li><Link className='admin_footer_link' style={{ textDecoration: 'none' }} to="/admin/userslist">Users</Link></li>
                  <li><Link className='admin_footer_link' style={{ textDecoration: 'none' }} to="/admin/organizer">Organizers</Link></li>
                </ul>
                {/* Footer list one ends*/}
              </div>
            </div>
          </div>
          <div className='footer_innersub_row_2'>
            <div className='footer_innerdiv-useful-links footer_innerdiv'>
              <div className='footer_innerdiv-useful-links-heading'>
                <h4>HELP CENTER</h4>
              </div>
              <div className='footer_innerdiv-useful-links_links'>
                {/* Footer list two start*/}
                <ul>
                  <li><Link className='admin_footer_link' style={{ textDecoration: 'none' }} to="k">FAQ</Link></li>
                  <li><Link className='admin_footer_link' style={{ textDecoration: 'none' }} to="k">Privacy</Link></li>
                  <li><Link className='admin_footer_link' style={{ textDecoration: 'none' }} to="k">Corporate Information</Link></li>
                </ul>
                {/* Footer list two ends*/}
              </div>
            </div>
            <div className='footer_innerdiv-contact-us footer_innerdiv'>
              <div className='footer_innerdiv-contact-us-heading'>
                {/* Footer list three start*/}
                <h4>CONTACT US</h4>
                <p>Banglore,</p>
                <p>India,</p>
                <p>Ph:79472</p>
                <p>Email:superadmin@gmail.com</p>
                {/* Footer list three ends*/}
                <div className='footer_icons'>
                  <a href="#"><div uk-icon="icon: facebook"></div></a>
                  <a href="#"><div uk-icon="icon: twitter"></div></a>
                  <a href="#"><div uk-icon="icon: instagram"></div></a>
                  <a href="#"><div uk-icon="icon: linkedin"></div></a>
                  <a href="#"><div uk-icon="icon: youtube"></div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_copyright'>
          <p>© 2008 - 2021 Gm4. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer