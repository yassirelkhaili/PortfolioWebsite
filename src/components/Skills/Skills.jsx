import React from 'react'
import { FaLaptopCode } from 'react-icons/fa';
import "./Skills.css";
import Card from "./Card";
import cardData from './data';

const Skills = () => {
  return (
    <div className='container' id='Skills'>
      <div className='row'>
        <div className='col'>
      <div className="skills-header" id="skills-header" data-aos="fade-up"><FaLaptopCode />Skills&<span className="abilities">Abilities</span></div>
      </div>
      </div>
      <div className='row'>
      <div className='card-wrapper'>
        {cardData.map((data) => {
            return (
                <Card name={data.name} icon={data.icon} key={data.id}/>
            )
        })}
      </div>
      </div>
    </div>
  )
}

export default Skills