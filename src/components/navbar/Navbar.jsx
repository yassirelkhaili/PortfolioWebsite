import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='container-fluid'>
        <div className='navbar row'>
        <span className='header col'><img alt='logo' className="logo" src={require("../../assets/logo.png")}></img>Yassir Elkhaili</span>
        <ul id='navbar' className='col'>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Skills'>Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href='#Certificates'>Certificates</a></li>
            <li><a href='#Contact'>Contact</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar