import React from "react";
import "./Projects.css";
import { FaClipboardList } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import LanguageContext from "../../languages/Language-Context";

const Projects = () => {
  const language = useContext(LanguageContext);
  const { item4 } = language;
  return (
    <div className="container" id="Projects">
      <div className="row">
        <div
          className="skills-header projects-header"
          id="skills-header"
          data-aos="fade-up"
        >
          <FaClipboardList />
          <span className="abilities">{item4}</span>
        </div>
      </div>
      <div className="row">
        <div className="projects-container">
          {WorkProjectsData.map((data) => {
            return (
              <WorkProjects
                caption={data.caption}
                snippet={data.snippet}
                link={data.link}
                key={data.id}
              />
            );
          })}
        </div>
        <div className="personalProjects-container">
          {PersonalProjectsData.map((data) => {
            return (
              <PersonalProjects
                caption={data.caption}
                snippet={data.snippet}
                link={data.link}
                key={data.id}
                github={data.github}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

function WorkProjects({ caption, snippet, link }) {
  return (
    <Tilt tiltEnable="true" perspective=" 15000">
      <div className="projects-div" data-aos="fade-up">
        <img className="projects-img" src={snippet} alt="projects"></img>
        <p className="caption">{caption}</p>
        <a href={link} className="live" target="_blank" rel="noreferrer">
          Live Website
        </a>
      </div>
    </Tilt>
  );
}

function PersonalProjects({ caption, snippet, link, github }) {
  return (
    <>
      <Tilt tiltEnable="true" perspective="4000">
        <div className="projects-div" data-aos="fade-up">
          <img className="projects-img" src={snippet} alt="projects"></img>
          <p className="caption">{caption}</p>
          <a href={github} className="live" target="_blank" rel="noreferrer">
            <BsGithub />
            Github
          </a>
          <a
            href={link}
            className="live"
            id="p-projects-links"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </Tilt>
    </>
  );
}

const WorkProjectsData = [
  {
    id: 1,
    caption: "Marrakech-Leather-Pouf",
    snippet: require("../../assets/moroccanleatherpoufs.webp"),
    link: "https://www.moroccan-leather-pouf.com/",
  },
  {
    id: 2,
    caption: "Marrakech Charity Project",
    snippet: require("../../assets/marrakechharity.webp"),
    link: "http://eurekadigital.ddns.net:8888/association/",
  },
  {
    id: 3,
    caption: "All In Car Rental Service",
    snippet: require("../../assets/allincar.webp"),
    link: "http://eurekadigital.ddns.net:8888/allincar/",
  },
];

const PersonalProjectsData = [
  {
    id: 4,
    caption: "Javascriptcalculator",
    snippet: require("../../assets/javascriptcalculator.webp"),
    link: "https://myjavascriptcalculatorfreecodecamp.netlify.app",
    github: "https://github.com/yassirelkhaili/javascriptCalculator",
  },
  {
    id: 5,
    caption: "Quotesgenerator",
    snippet: require("../../assets/quotesgenerator.webp"),
    link: "https://cs1-6quotesgenerator.netlify.app",
    github: "https://github.com/yassirelkhaili/Cs1.6quotesgenerator",
  },
  {
    id: 6,
    caption: "Jokesgenerator",
    snippet: require("../../assets/jokesgenerator.webp"),
    link: "https://randomquotesgeneratorfetchapienger.netlify.app",
    github:
      "https://github.com/yassirelkhaili/randomQuotesGeneratorEnglishDeutschFetchApi",
  },
  {
    id: 7,
    caption: "Markdownpreviewer",
    snippet: require("../../assets/markdownpreviewer.webp"),
    link: "https://mylittlemarkdownpreviewer.netlify.app",
    github: "https://github.com/yassirelkhaili/markdownreviewer",
  },
  {
    id: 8,
    caption: "Drummachine",
    snippet: require("../../assets/drummachine.webp"),
    link: "https://drummachinemitkeyreader.netlify.app",
    github: "https://github.com/yassirelkhaili/drummachine",
  },
  {
    id: 9,
    caption: "Pomodoroclock",
    snippet: require("../../assets/pomodoroclock.webp"),
    link: "https://pomodoroclock25plus5clock.netlify.app",
    github: "https://github.com/yassirelkhaili/PomodoroClock-",
  },
];

export default Projects;
