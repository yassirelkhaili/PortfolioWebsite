import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import "./Skills.css";
import Card from "./Card";
import cardData from "./data";

const Skills = ({ header1, header2 }) => {
  return (
    <div className="container" id="Skills">
      <div className="row">
        <div className="col skills-col" data-aos="fade-up">
          <div className="skills-header" id="skills-header">
            <FaLaptopCode />
            {header1}
          </div>
          <div className="abilities">{header2}</div>
        </div>
      </div>
      <div className="row">
        <div className="card-wrapper">
          {cardData.map((data) => {
            return <Card name={data.name} icon={data.icon} key={data.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
