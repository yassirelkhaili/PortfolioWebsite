import React from 'react'
import "./Footer.css"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaFreeCodeCamp } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { SiNetlify } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='container-fluid footer-container'>
    <div className='footer-wrapper row p-4'>
    <div className='col-md-4'>
    <div className='col-one'>
    <h1 className='col-header'>Yassir's Portfolio</h1>
    <p className='row-paragraph'>Thank you for visiting my portfolio! I hope you enjoyed learning more about me, my work and accomplishments. If you have any questions or would like to connect further, please don't hesitate to reach out via Whatsapp, Email or the contact form above. Thanks again for stopping by!</p>
    </div>
    </div>
    <div className='col-md-4 d-md-flex justify-content-center align-items-center'>
    <div className='col-two'>
    <h1 className='col-header'>Quick Links</h1>
    <ul className='footer-links'>
      <li><a className='quick-links' href="#Home"><BsFillArrowRightCircleFill color='white'/><span className='footer-span'>Home</span></a></li>
      <li><a className='quick-links' href="#About"><BsFillArrowRightCircleFill color='white'/><span className='footer-span'>About</span></a></li>
      <li><a className='quick-links' href="#Skills"><BsFillArrowRightCircleFill color='white'/><span className='footer-span'>Skills</span></a></li>
      <li><a className='quick-links' href="#Projects"><BsFillArrowRightCircleFill color='white'/><span className='footer-span'>Projects</span></a></li>
      <li><a className='quick-links' href="#Certificates"><BsFillArrowRightCircleFill color='white'/><span className='footer-span'>Certificates</span></a></li>
      <li><a className='quick-links' href="#Contact"><BsFillArrowRightCircleFill color='white'/><span className='footer-span'>Contact</span></a></li>
    </ul>
    </div>
    </div>
    <div className='col-md-4 d-md-flex justify-content-center align-items-center'>
      <div className='col-three'>
    <h1 className='col-header'>Contact Info</h1>
    <ul className='contact-info'>
      <li><a href="https://wa.me/+212623683260" target="_blank" rel="noreferrer"><img id="footer-icon" src="https://img.icons8.com/ios-glyphs/30/01b9ff/whatsapp.png"/><span className='contact-text'> +212 623-683260</span></a></li>
      <li><a href='mailto:elkhailiyassir@gmail.com' target="_blank" rel="noreferrer"><img id="footer-icon" src="https://img.icons8.com/ios-glyphs/30/01b9ff/gmail.png"/><span className='contact-text'> elkhailiyassir@gmail.com</span></a></li>
      <li><a href='https://goo.gl/maps/Q8Wno9qKxmwC5vf19' target="_blank" rel="noreferrer"><img id="footer-icon" src="https://img.icons8.com/ios-filled/50/01b9ff/map-marker--v1.png"/> <span className='contact-text'>40090 Marrakech, Morocco</span></a></li>
      <ul id="socials-footer">
        <li><a href="https://www.freecodecamp.org/Blue479" target="_blank" rel="noreferrer"><FaFreeCodeCamp className="icon"/></a></li>
        <li><a href="https://github.com/yassirelkhaili" target="_blank" rel="noreferrer"><BsGithub className="icon"/></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100010165301312" target="_blank" rel="noreferrer"><BsFacebook className="icon"/></a></li>
        <li><a href="https://app.netlify.com/teams/yassirelkhaili/overview" target="_blank" rel="noreferrer"><SiNetlify className="icon"/></a></li>
      </ul>  
    </ul>
    </div>
    </div>
    </div>
    <div className='row page-end'>
    <h1 className='page-end-statement'>Designed with <i className="fa fa-heart fa-beat" style={{color: "#880808"}}></i> By <span id='page-end-name'>Yassir Elkhaili</span></h1>
    </div>
    </div>
  )
}

export default Footer