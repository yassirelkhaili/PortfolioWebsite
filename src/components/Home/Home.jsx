import React, { useRef } from "react";
import { useEffect } from "react";
import "./Home.css";
import Typed from "typed.js";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { useContext } from "react";
import LanguageContext from "../../languages/Language-Context";

const Home = () => {
  const language = useContext(LanguageContext);
  const { strings, header2, homeHeader, homeButton, homeSubHeader } = language;
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, [strings]);
  return (
    <div className="container" id="Home">
      <div className="row">
        <div className="header-div col-md-6">
          <div className="main-header">
            <div className="header">
              {homeHeader}
              <div className="fullname">
                {header2} Yassir <span className="Lastname">Elkhaili</span>
              </div>
              <div className="animated-text">
                <span className="holder">{homeSubHeader}</span>&nbsp;
                <span className="animated" ref={el}></span>
              </div>
            </div>
            <div className="my-about-button" data-aos="fade-up">
              <a id="about-button" href="#About">
                {homeButton}{" "}
                <span className="myIcon">
                  <FaArrowCircleDown />
                </span>
              </a>
              <ul id="socials">
                <li>
                  <a
                    href="https://www.freecodecamp.org/Blue479"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFreeCodeCamp className="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/yassirelkhaili"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub className="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100010165301312"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook className="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.netlify.com/teams/yassirelkhaili/overview"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiNetlify className="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-md-end text-center pt-5 pt-md-0">
          <Tilt tiltEnable="true" perspective="10000">
            <img
              className="myprofilepic img-fluid"
              alt="profilepic"
              src="assets/profilepic.webp"
            ></img>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Home;
