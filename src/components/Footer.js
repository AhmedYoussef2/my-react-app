import React from 'react';
import './tank.css';
import {GrFacebook,ImTwitter,AiFillInstagram} from 'react-icons/fa'
import d1 from '../img/download1.png';
import d2 from '../img/download2.png';
import d3 from '../img/download.png';
import d4 from '../img/download.jpg';
import d5 from '../img/facebook-icon-logo-C61047A9E7-seeklogo.com.png';
const Footer = () => {
  return (
    
  <div className='flex jak justify-between'>
    
    <div className='fl1 flex flex-row' >
    <span className='fop'>© All rights reserved</span>
     <img className='d1' src={d1}></img>
     <img className='d1 d2' src={d2}></img>
    
    </div>

    <div className='flex jonp justify-between'>
      <img className='jon' src={d3}></img>
     <img className='jon' src={d4}></img>
     <img className='jon' src={d5}></img>
     </div>
    </div>
 
  );
};

export default Footer;
