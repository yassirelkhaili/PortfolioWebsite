import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certificates from "./components/Certificates/Certificates";
import Header from "./components/Header/Header";
import Englich from "./languages/Englich.js";
import Deutsch from "./languages/Deutsch.js";
import French from "./languages/French.js";

const App = () => {
  const [language, setlanguage] = useState(Englich);
  const languageEnglich = () => {
    setlanguage(Englich);
  };
  const languageDeutsch = () => {
    setlanguage(Deutsch);
  };
  const languageFrench = () => {
    setlanguage(French);
  };
  return (
    <>
      <Navbar
        englich={languageEnglich}
        deutsch={languageDeutsch}
        french={languageFrench}
        home={language.item1}
        about={language.item2}
        skills={language.item3}
        projects={language.item4}
        certificates={language.item5}
        contact={language.item6}
      />
      <Home
        strings={language.strings}
        header2={language.header2}
        header={language.homeHeader}
        Button={language.homeButton}
        subHeader={language.homeSubheader}
      />
      <About
        mainHeader1={language.mainHeader1}
        mainHeader2={language.mainHeader2}
        header={language.header}
        subHeader={language.subHeader}
        age={language.age}
        address={language.address}
        addressValue={language.addressValue}
        paragraph={language.paragraph}
        downloadButton={language.downloadButton}
      />
      <Skills
        header1={language.skillsHeader1}
        header2={language.skillsHeader2}
      />
      <Projects header={language.item4} />
      <Certificates
        header={language.item5}
        note1={language.note1}
        note2={language.note2}
        note3={language.note3}
        view={language.view}
      />
      <Contact
        header1={language.contactheader1}
        header2={language.contactheader2}
        fname={language.fname}
        lname={language.lname}
        company={language.company}
        phone={language.phone}
        message={language.message}
        button={language.contactButton}
        disclaimer1={language.disclaimer1}
        disclaimer2={language.disclaimer2}
        submitMessage={language.submitmessage}
      />
      <Footer
        header={language.footerHeader}
        home={language.item1}
        about={language.item2}
        skills={language.item3}
        projects={language.item4}
        certificates={language.item5}
        contact={language.item6}
        text={language.footerText}
        signature1={language.signature1}
        signature2={language.signature2}
        signature3={language.signature3}
        header2={language.footerHeader2}
        header3={language.footerHeader3}
        address={language.footerAddress}
      />
      <Header />
    </>
  );
};

export default App;
