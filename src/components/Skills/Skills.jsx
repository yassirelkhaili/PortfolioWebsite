import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import "./Skills.css";
import Card from "./Card";
import cardData from "./data";
import { useContext } from "react";
import LanguageContext from "../../languages/Language-Context";

const Skills = () => {
  const language = useContext(LanguageContext);
  const { skillsHeader1, skillsHeader2 } = language;
  return (
    <div className="container" id="Skills">
      <div className="row">
        <div className="col skills-col" data-aos="fade-up">
          <div className="skills-header" id="skills-header">
            <FaLaptopCode />
            &nbsp;{skillsHeader1}
          </div>
          <div className="abilities">{skillsHeader2}</div>
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
