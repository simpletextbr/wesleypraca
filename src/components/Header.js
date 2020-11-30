import React from 'react';
import { Link, animateScroll } from 'react-scroll'

import './Header.css'

import logo from '../assets/LOGO.svg'

export default function Header({scroll}){

  function handleHome(){
    animateScroll.scrollTo(0)
  }

  function handleAboutMe(){
    animateScroll.scrollTo(140)
  }

  function hanleTechs(){
    if(window.innerWidth > 700){
      animateScroll.scrollTo(1000)
    } else {
      animateScroll.scrollTo(2000)
    }
  }
   

    return (
        <header className={scroll ? 'scroll': ""}>
            <a href="/wesleypraca">
            <img src={logo} alt="logo do site" />
            </a>
            <nav>
                <Link
                  activeClass="active"
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
                  activeClass="active"
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
                  activeClass="active"
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