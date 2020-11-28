import React from 'react';

import './Header.css'

import logo from '../assets/LOGO.svg'

export default function Header({scroll}){
   

    return (
        <header className={scroll ? 'scroll': ""}>
            <a href="/wesleypraca">
            <img src={logo} alt="logo do site" />
            </a>
            <nav>
                <a href="#home">
                <p>HOME</p>
                </a>
                <a href="#aboutme">
                <p>ABOUT ME</p>
                </a>
                <a href="#techs">
                <p>TECHS</p>
                </a>
            </nav>
        </header>
    );
}