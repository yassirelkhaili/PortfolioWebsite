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
import LanguageContext from "./languages/Language-Context";

const App = () => {
  const [language, setlanguage] = useState(Englich);
  const languageEnglich = () => {
    setlanguage(Englich);
    let languageMenu = document.getElementById("language-menu");
    languageMenu.classList.toggle("language-menu-active");
  };
  const languageDeutsch = () => {
    setlanguage(Deutsch);
    let languageMenu = document.getElementById("language-menu");
    languageMenu.classList.toggle("language-menu-active");
  };
  const languageFrench = () => {
    setlanguage(French);
    let languageMenu = document.getElementById("language-menu");
    languageMenu.classList.toggle("language-menu-active");
  };
  return (
    <LanguageContext.Provider value={language}>
      <Navbar
        englich={languageEnglich}
        deutsch={languageDeutsch}
        french={languageFrench}
      />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <Header />
    </LanguageContext.Provider>
  );
};

export default App;
