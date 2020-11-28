import React, { useState, useEffect } from "react";

import "./App.css";

//componets
import Header from "./components/Header";
import Aside from "./components/Aside";
import Card from "./components/Card";
import Techs from "./components/Techs";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [footer, setFooter] = useState(true);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      console.log(window.self.innerWidth)
      if (window.scrollY > 1128 && window.self.innerWidth > 1500) {
        setFooter(false);
      } else if(window.scrollY > 2428 && window.self.innerWidth < 1200) {
        setFooter(false);
      } else{
        setFooter(true)
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="App">
      <Header scroll={scrolled} id="#home" />
      <main>
        <div className="aboutme">
          <Aside />
          <Card />
        </div>
        <div className="techs" id="#techs">
          <Techs />
        </div>
      </main>
      <footer>
        <Footer scroll={footer}/>
      </footer>
    </div>
  );
}
