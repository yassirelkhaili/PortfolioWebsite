import React from 'react'
import "./Certificates.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { TbCertificate } from "react-icons/tb";

const Certificates = () => {
  return (
    <div className='certificates-container container' id='Certificates'>
        <div className='row'>
        <div className='certificates-header'>
        <div className="contact-header" data-aos="fade-up"><TbCertificate /><span className="me">Certificates</span></div>
        </div>
        </div>
        <div className='myCarousel row'>
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} width="80%" swipeable={true} emulateTouch={true} stopOnHover={true}>
                <div>
                    <img src={require("../../assets/freecodecamptwo.webp")} alt="Certificate" style={{height: "600px"}}></img>
                    <a href='https://www.freecodecamp.org/certification/Blue479/front-end-development-libraries' className='legend' id='link' target="_blank" rel="noreferrer">View Cetrtificate</a>
                </div>
                <div>
                    <img src={require("../../assets/freecodecampone.webp")} alt="Certificate" style={{height: "600px"}}></img>
                    <a href='https://www.freecodecamp.org/certification/Blue479/responsive-web-design' id='link' className='legend' target="_blank" rel="noreferrer">View Cetrtificate</a>
                </div>
                <div>
                    <img src={require("../../assets/openclassroomsfour.webp")} alt="Certificate" style={{height: "600px"}} />
                    <a href='https://openclassrooms.com/fr/course-certificates/4164787419' id='link' className='legend' target="_blank" rel="noreferrer">View Cetrtificate</a>
                </div>
                <div>
                    <img src={require("../../assets/openclassroomsone.webp")} alt="Certificate" style={{height: "600px"}} />
                    <a href='https://openclassrooms.com/fr/course-certificates/8561841789' id='link' className='legend' target="_blank" rel="noreferrer">View Cetrtificate</a>
                </div>
                <div>
                    <img src={require("../../assets/openclassroomstwo.webp")} alt="Certificate" style={{height: "600px"}} />
                    <a href='https://openclassrooms.com/fr/course-certificates/7400247786' id='link' className='legend'target="_blank" rel="noreferrer">View Cetrtificate</a>
                </div>
                <div>
                    <img src={require("../../assets/openclassroomsthree.webp")} alt="Certificate" style={{height: "600px"}} />
                    <a href='https://openclassrooms.com/fr/course-certificates/1917801523' id='link' className='legend' target="_blank" rel="noreferrer">View Cetrtificate</a>
                </div>
                <div>
                    <img src={require("../../assets/openclassroomsfive.webp")} alt="Certificate" style={{height: "600px"}} />
                    <a href='https://openclassrooms.com/fr/course-certificates/2675817408' id='link' className='legend' target="_blank" rel="noreferrer">View Cetrtificate</a>
                </div>
                <div>
                    <img src={require("../../assets/openclassroomssix.webp")} alt="Certificate" style={{height: "600px"}}/>
                    <a href='https://openclassrooms.com/fr/course-certificates/7133265290' id='link' className='legend' target="_blank" rel="noreferrer">View Cetrtificate</a>
                </div>
            </Carousel>
            </div>
            <div className='row'>
            <div className='note'>
            <p className='certificates-notes'><span id='note'>Note:</span><span> In order to view the Openclassroom Certificates enter my last name<span id="lname"> Elkhaili </span>in the input box</span></p>
            </div>
            </div>
        </div>
  )
}

export default Certificates