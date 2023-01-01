import React from "react";
import "./About.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <div className="container" id="About">
      <div className="row">
        <div className="about-header" id="about-header" data-aos="fade-up">
          <BsFillPersonFill /> About<span className="me">Me</span>
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
        <div className="content col-md-6 text-center text-md-start " data-aos="fade-up">
          <div className="about-content-header">
            <h1>
              I'm <span className="name">Yassir</span>
            </h1>
          </div>
          <div className="about-content-subheader">
            <h4>Student Developer</h4>
          </div>
          <div className="about-description">
            <p className="paragraph">
            Hi there! My name is Yassir Elkhaili and I am a student, intern, and developer currently training at Webcinq Training school and interning at Eureka Creation. I have a strong background in computer science, having studied at the Faculty of Science and Technology and at Studienkolleg Johannes Gutenburg University Mainz. I am passionate about using my skills and knowledge to build and create innovative solutions, and I am always looking for ways to improve and expand my skillset. In my free time, I enjoy staying up to date with the latest developments in the tech industry and exploring new technologies.
            </p>
          </div>
        </div>
        <div className="myLinks row" data-aos="fade-up">
            <div className="col-md-6 pb-2 pb-md-0">
              <div className="age">
                <span style={{ color: "#01B9FF" }}>Age:</span>
                <span>&nbsp;22</span>
              </div>
              <div className="email">
                <span style={{ color: "#01B9FF" }}>E-mail:</span>
                &nbsp;elkhailiyassir@gmail.com
              </div>
            </div>
            <div className="col-md-6">
              <div className="whatsapp">
              <span style={{ color: "#01B9FF" }}>Whatsapp:</span><span>&nbsp;+212 623-683260</span>
              </div> 
              <div className="Address"><span style={{ color: "#01B9FF" }}>Address:</span>&nbsp;Sidi Abbad 03 N100, 40090, Marrakech
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
              Download CV <FaDownload className="download-icon" />
            </a>
          </div>
          </div>
      </div>
    </div>
  );
};

export default About;
