import React, {useRef} from "react";
import { useEffect } from "react";
import "./Home.css";
import Typed from "typed.js";
import { FaArrowCircleDown } from 'react-icons/fa';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { SiNetlify } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';

const Home = () => {
    const el = useRef(null);
    const typed = useRef(null);
  
    useEffect(() => {
      const options = {
        strings: [
          'Web Developement',
          'Front End Developement',
          'System Administration',
          'Software Developement',
          'Back End Developement',
          'I.T Security'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
      };
      typed.current = new Typed(el.current, options);
      return () => {
        typed.current.destroy();
      }
    }, [])
  return <div className="container" id="Home">
    <div className="main-header">
    <p className="header">Hi, There,<p className="fullname">I'm Yassir <span className="Lastname">Elkhaili</span></p><div className="animated-text"><span className="holder">I Am Into </span><span className="animated" ref={el}></span></div></p> 
    <Tilt tiltEnable="true" perspective="4000">
    <img className="profilepic" alt="profilpic" src={require("../../assets/profilepic.webp")}></img>
    </Tilt>
    </div>
    <div className="my-about-button">
      <a id="about-button" href="#About">About Me <span className="myIcon"><FaArrowCircleDown /></span></a>
    </div>
    <div className="socials">
      <ul id="socials">
        <li><a href="https://www.freecodecamp.org/Blue479" target="_blank" rel="noreferrer"><FaFreeCodeCamp className="icon"/></a></li>
        <li><a href="https://github.com/yassirelkhaili" target="_blank" rel="noreferrer"><BsGithub className="icon"/></a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100010165301312" target="_blank" rel="noreferrer"><BsFacebook className="icon"/></a></li>
        <li><a href="https://app.netlify.com/teams/yassirelkhaili/overview" target="_blank" rel="noreferrer"><SiNetlify className="icon"/></a></li>
      </ul>
    </div>
  </div>;
};

export default Home;
