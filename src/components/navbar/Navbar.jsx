import React from "react";
import "./Navbar.css";

const Navbar = ({
  englich,
  deutsch,
  french,
  home,
  about,
  skills,
  projects,
  certificates,
  contact,
}) => {
  const toggleElements = () => {
    let navLinks = document.getElementById("navbar");
    let navbar = document.getElementsByClassName("navbar")[0];
    let icon = document.getElementsByClassName("animated-icon3")[0];
    navLinks.classList.toggle("active1");
    navbar.classList.toggle("active2");
    icon.classList.toggle("open");
  };

  const toggleLanguages = () => {
    let settingsButton = document.getElementsByClassName("settings-btn")[0];
    settingsButton.classList.toggle("settings-btn-active");
    let languageMenu = document.getElementById("language-menu");
    languageMenu.classList.toggle("language-menu-active");
  };
  return (
    <div className="container-fluid navbar-container">
      <div className="navbar row">
        <span className="header col">
          <img
            alt="logo"
            className="logo"
            src={require("../../assets/logo.png")}
          ></img>
          Yassir Elkhaili
        </span>
        <ul className="col" id="navbar">
          <li>
            <a href="#Home">
              {home}
            </a>
          </li>
          <li>
            <a href="#About">{about}</a>
          </li>
          <li>
            <a href="#Skills">{skills}</a>
          </li>
          <li>
            <a href="#Projects">{projects}</a>
          </li>
          <li>
            <a href="#Certificates">{certificates}</a>
          </li>
          <li>
            <a href="#Contact">{contact}</a>
          </li>
          <div className="languages" id="languages">
            <li>
              <a href="#Englich" onClick={englich}>
                English
              </a>{" "}
              <span
                className="spacer"
                style={{ color: "#1DDDBC", cursor: "pointer" }}
              >
                &nbsp;/&nbsp;
              </span>
            </li>
            <li>
              <a href="#Deutsch" onClick={deutsch}>
                Deutsch
              </a>{" "}
              <span
                className="spacer"
                style={{ color: "#1DDDBC", cursor: "pointer" }}
              >
                &nbsp;/&nbsp;
              </span>
            </li>
            <li>
              <a href="#Deutsch" onClick={french}>
                Français
              </a>
            </li>
          </div>
          <li>
            <img
              className="settings-btn"
              src="https://img.icons8.com/ios-filled/50/1dddbc/engineering.png"
              onClick={toggleLanguages}
              alt="gear icon"
            ></img>
          </li>
        </ul>
      </div>
      <div className="row" id="language-menu">
        <div className="col-12">
          <a href="#Englich" id="language-links" onClick={englich}>
            English
          </a>
        </div>
        <div className="col-12">
          <a href="#Deutsch" id="language-links" onClick={deutsch}>
            Deutsch
          </a>
        </div>
        <div className="col-12">
          <a href="#Français" id="language-links" onClick={french}>
            Français
          </a>
        </div>
      </div>
      <a className="animated-icon3" onClick={toggleElements} href="#Settings">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
};

export default Navbar;
