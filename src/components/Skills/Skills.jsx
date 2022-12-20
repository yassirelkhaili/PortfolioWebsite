import React from 'react'
import { FaLaptopCode } from 'react-icons/fa';
import "./Skills.css";
import Card from "./Card";
import cardData from './data';

const Skills = () => {
  return (
    <div className='container' id='Skills'>
      <div className="skills-header" id="skills-header"><FaLaptopCode />Skills&<span className="abilities">Abilities</span></div>
      <div className='card-wrapper'>
        {cardData.map((data) => {
            return (
                <Card name={data.name} icon={data.icon}/>
            )
        })}
      </div>
    </div>
  )
}

export default Skills