import React from 'react'
import "./Contact.css";
import { BiMessageDetail } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { GiFamilyTree } from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

const Contact = () => {
  return (
    <div className='wrapper' id="Contact">
      <div className="contact-header"><BiMessageDetail /> Contact<span className="me">Me</span></div>
    <div className='form-container'>
      <form className="form" id="form">
      <div className='elements-wrapper'>
      <label for="form-fname" className='fname-label' id='fname-label'><BsPersonSquare /> Firstname</label>
      <input className='form-fname' id='form-fname' name='fname' placeholder='Firstname' type="text" required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-lname" className='lname-label' id='lname-label'><GiFamilyTree /> Lastname</label>
      <input className='form-lname' id='form-lname' name='lname' placeholder='Lastname' type="text" required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-company" className='company-label' id='company-label'><FaRegBuilding /> Company</label>
      <input className='form-company' id='form-company' name='company' placeholder='Company' type="text" required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-email" className='email-label' id='email-label'><MdEmail /> E-mail</label>
      <input className='form-email' id='form-email' name='email' placeholder='E-mail' type="email" required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-phone" className='phone-label' id='phone-label'><BsTelephoneForwardFill /> Phone</label>&nbsp;
      <input className='form-phone' id='form-phone' name='phone' placeholder='Phone' type="tel" required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-message" className='message-label' id='message-label'><AiFillMessage /> Message</label>&nbsp;
      <textarea className='form-message' id='form-message' name='message' placeholder='Message' required></textarea>
      </div>
      <button className='form-button' id='form-button' type='submit'>Send Message</button>
      </form>
    </div>
    </div>
  )
}

export default Contact