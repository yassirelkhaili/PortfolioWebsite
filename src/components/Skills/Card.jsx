import React from "react";
import Tilt from "react-parallax-tilt";

const Card = ({ name, icon }) => {
  return (
    <>
      <Tilt tiltEnable="true" perspective="2000">
        <div className="skill-container" data-aos="fade-up">
          <img className="skills-images" src={icon} alt="skill-icon"></img>
          <p className="skill-title">{name}</p>
        </div>
      </Tilt>
    </>
  );
};

export default Card;
