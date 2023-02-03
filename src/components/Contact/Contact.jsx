import React, { useState } from "react";
import "./Contact.css";
import { BiMessageDetail } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { GiFamilyTree } from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { useContext } from "react";
import LanguageContext from "../../languages/Language-Context";

const Contact = () => {
  const language = useContext(LanguageContext);
  const {
    contactHeader1,
    contactHeader2,
    fname,
    lname,
    company,
    phone,
    message,
    contactButton,
  } = language;
  const [data, setdata] = useState({});
  const [buttonState, setbuttonState] = useState(false);
  const [submitmessage, setsubmitmessage] = useState("");
  const configObject = {
    SecureToken: "d6413833-8f3a-4600-99e9-a4cec961a2f3",
    To: data.email,
    From: "elkhailiyassir@gmail.com",
    Subject: "Contact Form myPortfolioWebsite Yassir Elkhaili",
    Body: "English: Hey, thank you for you intrest, I will reply to you via your email address as soon as possible! Deutsch: Vielen Dank für Ihr Interesse, ich werde Ihnen so schnell wie möglich über Ihre E-Mail-Adresse antworten!",
  };

  const configHost = {
    SecureToken: "d6413833-8f3a-4600-99e9-a4cec961a2f3",
    To: "elkhailiyassir@gmail.com",
    From: "elkhailiyassir@gmail.com",
    Subject: `**Company**: ${data.company}`,
    Body: `Firstname: ${data.fname} Lastname: ${data.lname} Company: ${data.company} Email: ${data.email} Phone: ${data.phone} Message: ${data.message}`,
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.Email.send(configObject).then(() => {
      setsubmitmessage(language.submitmessage);
    });
    window.Email.send(configHost).then(setbuttonState(true));
  };

  return (
    <div id="Contact">
      <div className="row">
        <div className="col contact-col" data-aos="fade-up">
          <div className="contact-header">
            <BiMessageDetail /> {contactHeader1}
          </div>
          <div className="me">{contactHeader2}</div>
        </div>
      </div>
      <div className="wrapper">
        <div className="form-container">
          <form
            className="form"
            id="form"
            onSubmit={handleSubmit}
            data-aos="fade-up"
          >
            <div className="elements-wrapper">
              <label
                htmlFor="form-fname"
                className="fname-label"
                id="fname-label"
              >
                <BsPersonSquare /> {fname}
              </label>
              <input
                className="form-fname"
                id="form-fname"
                name="fname"
                placeholder={fname}
                type="text"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="elements-wrapper">
              <label
                htmlFor="form-lname"
                className="lname-label"
                id="lname-label"
              >
                <GiFamilyTree /> {lname}
              </label>
              <input
                className="form-lname"
                id="form-lname"
                name="lname"
                placeholder={lname}
                type="text"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="elements-wrapper">
              <label
                htmlFor="form-company"
                className="company-label"
                id="company-label"
              >
                <FaRegBuilding /> {company}
              </label>
              <input
                className="form-company"
                id="form-company"
                name="company"
                placeholder={company}
                type="text"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="elements-wrapper">
              <label
                htmlFor="form-email"
                className="email-label"
                id="email-label"
              >
                <MdEmail /> E-mail
              </label>
              <input
                className="form-email"
                id="form-email"
                name="email"
                placeholder="E-mail"
                type="email"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="elements-wrapper">
              <label
                htmlFor="form-phone"
                className="phone-label"
                id="phone-label"
              >
                <BsTelephoneForwardFill /> {phone}
              </label>
              &nbsp;
              <input
                className="form-phone"
                id="form-phone"
                name="phone"
                placeholder={phone}
                type="tel"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="elements-wrapper">
              <label
                htmlFor="form-message"
                className="message-label"
                id="message-label"
              >
                <AiFillMessage /> {message}
              </label>
              &nbsp;
              <textarea
                className="form-message"
                id="form-message"
                name="message"
                placeholder={message}
                maxLength="2000"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="submit-btn">
              <button
                className="form-button"
                id="form-button"
                type="submit"
                disabled={buttonState}
              >
                {contactButton}{" "}
                <RiSendPlaneFill size="1.2em" className="submit-btn-icon" />
              </button>
            </div>
            <p className="submitmessage" id="submitmessage">
              {submitmessage}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
