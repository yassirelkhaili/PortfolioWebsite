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

  const toggleLanguages = () => {
  let settingsButton = document.getElementsByClassName("settings-btn")[0];
  settingsButton.classList.toggle("settings-btn-active");
  let languages = document.getElementById("languages");
  languages.classList.toggle("languages-active1");
  let navbar = document.getElementsByClassName("navbar")[0];
  navbar.classList.toggle("languages-active2");
  let navLinks = document.getElementById("navbar");
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
            <div className='languages' id='languages'>
            <li><a href=''>English</a> <span className='spacer' style={{color: "#1DDDBC", cursor:"pointer"}}>&nbsp;/&nbsp;</span></li>
            <li><a href=''>Deutsch</a></li>
            </div>
            <li><img className='settings-btn' src="https://img.icons8.com/ios-filled/50/1dddbc/engineering.png" onClick={toggleLanguages}></img></li>
        </ul>
        </div>
        <a className="animated-icon3" onClick={toggleElements}>
            <span></span><span></span><span></span>
              </a>
        </div>
  )
}

export default Navbar