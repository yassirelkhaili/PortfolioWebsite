import React, { useState } from 'react'
import { useEffect } from 'react';
import "./Contact.css";
import { BiMessageDetail } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { GiFamilyTree } from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

const Contact = () => {
  const [data, setdata] = useState({});
  const [buttonState, setbuttonState] = useState();
  let message = document.getElementById("submitmessage");
  useEffect(() => {
    window.localStorage.setItem("BUTTON_STATE", buttonState);
  }, [buttonState]);
  useEffect(() => {
  let data = window.localStorage.getItem("BUTTON_STATE");
  setbuttonState(data);
  }, []);
  const configObject = {
    SecureToken : "d6413833-8f3a-4600-99e9-a4cec961a2f3",
    To : data.email,
    From : "elkhailiyassir@gmail.com",
    Subject : "ReactJs Form myPortfolioWebsite Yassir Elkhaili",
    Body : "English: Hey, thank you for you intrest, I will reply to you via your email address as soon as possible! Deutsch: Vielen Dank für Ihr Interesse, ich werde Ihnen so schnell wie möglich über Ihre E-Mail-Adresse antworten!"
  };

  const configHost = {
    SecureToken : "d6413833-8f3a-4600-99e9-a4cec961a2f3",
    To : "elkhailiyassir0@gmail.com",
    From : "elkhailiyassir@gmail.com",
    Subject : "Company/Unternehmen",
    Body : `Firstname: ${data.fname} Lastname: ${data.lname} Company: ${data.company} Email: ${data.email} Phone: ${data.phone} Message: ${data.message}`
  }

  const handleChange = (e) => {
    setdata({...data, [e.target.name] : e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  if (buttonState === true) {
    message.textContent = "Please contact me via elkhailiyassir@gmail.com instead!";
  } else {
  window.Email.send(configObject).then(message.textContent="Thank you for your message, I will contact you back as soon as possible!");
  window.Email.send(configHost).then(() => {
    setbuttonState(true);
  });
  }
  }
  return (
    <div className='wrapper' id="Contact" onSubmit={handleSubmit}>
      <div className="contact-header"><BiMessageDetail /> Contact<span className="me">Me</span></div>
    <div className='form-container'>
      <form className="form" id="form">
      <div className='elements-wrapper'>
      <label for="form-fname" className='fname-label' id='fname-label' ><BsPersonSquare /> Firstname</label>
      <input className='form-fname' id='form-fname' name='fname' placeholder='Firstname' type="text" onChange={handleChange} required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-lname" className='lname-label' id='lname-label'><GiFamilyTree /> Lastname</label>
      <input className='form-lname' id='form-lname' name='lname' placeholder='Lastname' type="text" onChange={handleChange} required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-company" className='company-label' id='company-label'><FaRegBuilding /> Company</label>
      <input className='form-company' id='form-company' name='company' placeholder='Company' type="text" onChange={handleChange} required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-email" className='email-label' id='email-label'><MdEmail /> E-mail</label>
      <input className='form-email' id='form-email' name='email' placeholder='E-mail' type="email" onChange={handleChange} required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-phone" className='phone-label' id='phone-label'><BsTelephoneForwardFill /> Phone</label>&nbsp;
      <input className='form-phone' id='form-phone' name='phone' placeholder='Phone' type="tel" onChange={handleChange} required></input>
      </div>
      <div className='elements-wrapper'>
      <label for="form-message" className='message-label' id='message-label'><AiFillMessage /> Message</label>&nbsp;
      <textarea className='form-message' id='form-message' name='message' placeholder='Message' maxLength="2000" onChange={handleChange} required></textarea>
      </div>
      <button className='form-button' id='form-button' type='submit' disabled={buttonState}>Send Message</button>
      <p className='submitmessage' id='submitmessage'></p>
      </form>
    </div>
    </div>
  )
}

export default Contact