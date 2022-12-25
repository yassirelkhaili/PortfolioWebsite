import React from "react";
import "./About.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import Tilt from "react-parallax-tilt";


const About = () => {
  function changeImg () {
const personalPic = document.getElementById("personalpic");
personalPic.setAttribute("src", require("../../assets/img1.webp"));
  }
  function changeImgBack () {
    const personalPic = document.getElementById("personalpic");
    personalPic.setAttribute("src", require("../../assets/img2.webp"));
      }
      
  return (
    <div className="container" id="About">
      <div className="about-header" id="about-header"><BsFillPersonFill /> About<span className="me">Me</span></div>
      <div className="about-content">
        <div>
      <Tilt tiltEnable="true" perspective="8000">
        <img src={require("../../assets/img2.webp")} alt="personalimage" className="profilepic" id="personalpic" onMouseOver={changeImg} onMouseOut={changeImgBack}></img>
        </Tilt>
        </div>
        <div className="content">
        <div className="about-content-header"><h1>I'm <span className="name">Yassir</span></h1></div>
        <div className="about-content-subheader"><h4>Student Developer</h4></div>
        <div className="about-description"><p className="paragraph">I am a Student, Developer and Trainee based in Morocco, Marrakech. <br></br>I studied Computer science at The Faculty of Science and Technology <br></br>in Marrakech and the Studienkolleg of Johannes Gutenberg University Mainz, Germany. I am very passionate about Computer science and Information Technology
          in general. I am Currently working at Eureka Creation as a Web Developer. Constantly trying to expand my knowledge and improve my coding skills. Learning never stops.</p></div>
        <div className="about-links">
        <div className="age-email">
          <div className="age"><span style={{color:"#01B9FF"}}>Age:</span><span>&nbsp;22</span></div>
          <div className="email"><span style={{color:"#01B9FF"}}>E-mail:</span>&nbsp;elkhailiyassir@gmail.com</div>
        </div>
        <div className="whatsapp-address">
        <div className="whatsapp"><span style={{color:"#01B9FF"}}>Whatsapp:</span><span>&nbsp;+212 623-683260</span></div>
        <div className="Address"><span style={{color:"#01B9FF"}}>Address:</span>&nbsp;Sidi Abbad 03 N100, 40090, Marrakech</div>
        </div>
        <div className="about-button">
          <a id="about-btn" href="../assets/Lebenslauf_1.pdf" download="Lebenslauf_1.pdf" value="Download CV">Download CV <FaDownload className="download-icon"/></a>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
