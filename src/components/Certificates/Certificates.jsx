import React from "react";
import "./Certificates.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { TbCertificate } from "react-icons/tb";
import { useContext } from "react";
import LanguageContext from "../../languages/Language-Context";

const Certificates = () => {
  const language = useContext(LanguageContext);
  const { note1, note2, note3, view, item5 } = language;
  return (
    <div className="certificates-container container" id="Certificates">
      <div className="row">
        <div className="certificates-header">
          <div
            className="skills-header projects-header"
            id="skills-header"
            data-aos="fade-up"
          >
            <TbCertificate />
            <span className="me abilities">&nbsp;{item5}</span>
          </div>
        </div>
      </div>
      <div className="myCarousel row">
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          width="80%"
          swipeable={true}
          emulateTouch={true}
          stopOnHover={true}
          selectedItem={0}
        >
          <div>
            <img
              src="assets/freecodecamptwo.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            ></img>
            <a
              href="https://www.freecodecamp.org/certification/Blue479/front-end-development-libraries"
              className="legend"
              id="link"
              target="_blank"
              rel="noreferrer"
            >
              {view}
            </a>
          </div>
          <div>
            <img
              src="assets/freecodecampone.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            ></img>
            <a
              href="https://www.freecodecamp.org/certification/Blue479/responsive-web-design"
              id="link"
              className="legend"
              target="_blank"
              rel="noreferrer"
            >
              {view}
            </a>
          </div>
          <div>
            <img
              src="assets/frontend_1.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            />
          </div>
          <div>
            <img
              src="assets/backend_1.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            />
          </div>
          <div>
            <img
              src="assets/openclassroomsfour.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            />
            <a
              href="https://openclassrooms.com/fr/course-certificates/4164787419"
              id="link"
              className="legend"
              target="_blank"
              rel="noreferrer"
            >
              {view}
            </a>
          </div>
          <div>
            <img
              src="assets/openclassroomsone.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            />
            <a
              href="https://openclassrooms.com/fr/course-certificates/8561841789"
              id="link"
              className="legend"
              target="_blank"
              rel="noreferrer"
            >
              {view}
            </a>
          </div>
          <div>
            <img
              src="assets/openclassroomstwo.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            />
            <a
              href="https://openclassrooms.com/fr/course-certificates/7400247786"
              id="link"
              className="legend"
              target="_blank"
              rel="noreferrer"
            >
              {view}
            </a>
          </div>
          <div>
            <img
              src="assets/openclassroomsthree.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            />
            <a
              href="https://openclassrooms.com/fr/course-certificates/1917801523"
              id="link"
              className="legend"
              target="_blank"
              rel="noreferrer"
            >
              {view}
            </a>
          </div>
          <div>
            <img
              src="assets/openclassroomsfive.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            />
            <a
              href="https://openclassrooms.com/fr/course-certificates/2675817408"
              id="link"
              className="legend"
              target="_blank"
              rel="noreferrer"
            >
              {view}
            </a>
          </div>
          <div>
            <img
              src="assets/openclassroomssix.webp"
              alt="Certificate"
              style={{ height: "600px" }}
            />
            <a
              href="https://openclassrooms.com/fr/course-certificates/7133265290"
              id="link"
              className="legend"
              target="_blank"
              rel="noreferrer"
            >
              {view}
            </a>
          </div>
        </Carousel>
      </div>
      <div className="row">
        <div className="note">
          <p className="certificates-notes">
            <span id="note">{note1}:</span>
            <span>
              {" "}
              {note2}
              <span id="lname"> Elkhaili </span>
              {note3}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
