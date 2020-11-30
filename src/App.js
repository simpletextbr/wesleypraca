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
      if(window.scrollY > 1760 && window.innerWidth > 1200){
        setFooter(false)
      } else if(window.scrollY > 3800 && window.innerWidth > 700 && window.innerWidth < 1200) {
        setFooter(false);
      } else if(window.scrollY > 6200&& window.innerWidth < 700) {
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
      <Header scroll={scrolled} />
        <div className="main">
          <Aside />
          <Card />
        </div>
        <div className="techs" >
          <Techs />
        </div>
      <footer>
        <Footer scroll={footer}/>
      </footer>
    </div>
  );
}
