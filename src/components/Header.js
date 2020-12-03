import React, { useState } from "react";
import { Link, animateScroll } from "react-scroll";

import "./Header.css";

import logo from "../assets/LOGO.svg";

export default function Header({ scroll }) {
  const [home, setHome] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);
  const [techs, setTechs] = useState(false);

  function handleHome() {
    animateScroll.scrollTo(0);
    setHome(true);
    setAboutMe(false);
    setTechs(false);
  }

  function handleAboutMe() {
    animateScroll.scrollTo(140);
    setHome(false);
    setAboutMe(true);
    setTechs(false);
  }

  function hanleTechs() {
    if (window.innerWidth > 1200) {
      animateScroll.scrollTo(1000);
    } else if (window.innerWidth > 700 && window.innerWidth < 1200) {
      animateScroll.scrollTo(1560);
    } else {
      animateScroll.scrollTo(2000);
    }

    setHome(false);
    setAboutMe(false);
    setTechs(true);
  }

  return (
    <header className={scroll ? "scroll" : ""}>
      <a href="/wesleypraca">
        <img src={logo} alt="logo do site" />
      </a>
      <nav>
        <Link
          className={home ? "active" : ""}
          to="#home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleHome}
        >
          HOME
        </Link>
        <Link
          className={aboutMe ? "active" : ""}
          to="#home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={handleAboutMe}
        >
          ABOUT ME
        </Link>
        <Link
          className={techs ? "active" : ""}
          to="#home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={hanleTechs}
        >
          TECHS
        </Link>
      </nav>
    </header>
  );
}
