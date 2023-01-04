import React from "react";
import "./About.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const About = ({
  mainHeader1,
  mainHeader2,
  header,
  subHeader,
  paragraph,
  age,
  address,
  addressValue,
  downloadButton,
}) => {
  return (
    <div className="container" id="About">
      <div className="row">
        <div className="about-header" id="about-header" data-aos="fade-up">
          <BsFillPersonFill /> {mainHeader1}
          <span className="me">{mainHeader2}</span>
        </div>
      </div>
      <div className="about-content row">
        <div className="col-md-6 text-center text-md-start" data-aos="fade-up">
          <Tilt tiltEnable="true" perspective="8000">
            <img
              src={require("../../assets/img1.webp")}
              alt="personalimage"
              className="personalpic img-fluid"
            ></img>
          </Tilt>
        </div>
        <div
          className="content col-md-6 text-center text-md-start "
          data-aos="fade-up"
        >
          <div className="about-content-header">
            <h1>
              {header} <span className="name">Yassir</span>
            </h1>
          </div>
          <div className="about-content-subheader">
            <h4>{subHeader}</h4>
          </div>
          <div className="about-description">
            <p className="paragraph">{paragraph}</p>
          </div>
        </div>
        <div className="myLinks row" data-aos="fade-up">
          <div className="col-md-6 pb-2 pb-md-0">
            <div className="age">
              <span style={{ color: "#01B9FF" }}>{age}:</span>
              <span>&nbsp;22</span>
            </div>
            <div className="email">
              <span style={{ color: "#01B9FF" }}>E-mail:</span>
              &nbsp;elkhailiyassir@gmail.com
            </div>
          </div>
          <div className="col-md-6">
            <div className="whatsapp">
              <span style={{ color: "#01B9FF" }}>Whatsapp:</span>
              <span>&nbsp;+212 623-683260</span>
            </div>
            <div className="Address">
              <span style={{ color: "#01B9FF" }}>{address}:</span>&nbsp;Sidi
              Abbad 03 N100, 40090, {addressValue}
            </div>
          </div>
        </div>
        <div className="row" id="btn" data-aos="fade-up">
          <div className="about-button">
            <a
              id="about-btn"
              href={require("../../assets/Lebenslauf_1.pdf")}
              download="Lebenslauf_1.pdf"
              value="Download CV"
            >
              {downloadButton} <FaDownload className="download-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
