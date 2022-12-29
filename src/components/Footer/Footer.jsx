import React from 'react'
import "./Footer.css"
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaFreeCodeCamp } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { SiNetlify } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer-wrapper'>
    <div className='footer-row' id='row-one'>
    <h1 className='row-header' id='header-row-one'>Yassir's Portfolio</h1>
    <p className='row-paragraph' id='paragraph-row-one'>Thank you for visiting my portfolio! I hope you enjoyed learning more about me, my work and accomplishments. If you have any questions or would like to connect further, please don't hesitate to reach out via Whatsapp, Email or the contact form above. Thanks again for stopping by!</p>
    </div>
    <div className='footer-row' id="row-two">
    <h1>Quick Links</h1>
    <ul className='footer-links'>
      <li><a className='quick-links' href="#Home"><BsFillArrowRightCircleFill/><span className='footer-span'>Home</span></a></li>
      <li><a className='quick-links' href="#About"><BsFillArrowRightCircleFill/><span className='footer-span'>About</span></a></li>
      <li><a className='quick-links' href="#Skills"><BsFillArrowRightCircleFill/><span className='footer-span'>Skills</span></a></li>
      <li><a className='quick-links' href="#Projects"><BsFillArrowRightCircleFill/><span className='footer-span'>Projects</span></a></li>
      <li><a className='quick-links' href="#Certificates"><BsFillArrowRightCircleFill/><span className='footer-span'>Certificates</span></a></li>
      <li><a className='quick-links' href="#Contact"><BsFillArrowRightCircleFill/><span className='footer-span'>Contact</span></a></li>
    </ul>
    </div>
    <div className='footer-row' id='row-three'>
    <h1>Contact Info</h1>
    <ul className='contact-info'>
      <li><a href="https://wa.me/+212623683260" target="_blank" rel="noreferrer"><img id="footer-icon" src="https://img.icons8.com/ios-glyphs/30/01b9ff/whatsapp.png"/><span className='contact-text'> +212 623-683260</span></a></li>
      <li><a href='mailto:elkhailiyassir@gmail.com' target="_blank" rel="noreferrer"><img id="footer-icon" src="https://img.icons8.com/ios-glyphs/30/01b9ff/gmail.png"/><span className='contact-text'> elkhailiyassir@gmail.com</span></a></li>
      <li><a href='https://goo.gl/maps/Q8Wno9qKxmwC5vf19' target="_blank" rel="noreferrer"><img id="footer-icon" src="https://img.icons8.com/ios-filled/50/01b9ff/map-marker--v1.png"/> <span className='contact-text'> Marrakech, Morocco-40090</span></a></li>
      <li id='footer-buttons'><a className='footer-link' href='https://www.freecodecamp.org/Blue479' target="_blank" rel="noreferrer"><FaFreeCodeCamp/></a><a target="_blank" rel="noreferrer" className='footer-link' href='https://github.com/yassirelkhaili'><BsGithub /></a><a target="_blank" href='https://www.facebook.com/people/Yassir-Elk/100010165301312/' className='footer-link'><BsFacebook /></a><a target="_blank" className='footer-link' href='https://app.netlify.com/teams/yassirelkhaili/overview'><SiNetlify /></a></li>
    </ul>
    </div>
    </div>
    <div className='page-end'>
    <h1>Designed with <i class="fa fa-heart fa-beat" style={{color: "#880808"}}></i> By <span id='page-end-name'>Yassir Elkhaili</span></h1>
    </div>
    </div>
  )
}

export default Footer