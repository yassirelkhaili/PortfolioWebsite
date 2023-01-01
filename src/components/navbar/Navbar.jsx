import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  const toggleElements = () => {
    let icon = document.getElementsByClassName("animated-icon3")[0];
    icon.classList.toggle("open");  
    let navLinks = document.getElementById("navbar");
    let navbar = document.getElementsByClassName("navbar")[0];
    navLinks.classList.toggle("active1");
    navbar.classList.toggle("active2");
  }
  return (
    <div className='container-fluid navbar-container'>
        <div className='navbar row'>
        <span className='header col'><img alt='logo' className="logo" src={require("../../assets/logo.png")}></img>Yassir Elkhaili</span>
        <ul className='col' id='navbar'>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Skills'>Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href='#Certificates'>Certificates</a></li>
            <li><a href='#Contact'>Contact</a></li>
        </ul>
        </div>
        <a className="animated-icon3" onClick={toggleElements}>
            <span></span><span></span><span></span>
              </a>
        </div>
  )
}

export default Navbar