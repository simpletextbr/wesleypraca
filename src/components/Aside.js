import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./Aside.css";
import api from "../services/api";

export default function Aside() {
  const [repos, setRepos] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 3000){
      x = 3000
    }
    setScrollX(x)
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let docsW = repos.length * 320 ;
    if((window.innerWidth - docsW) > x){
      x = (window.innerWidth - docsW) - 860
    }
    setScrollX(x)
  }

  useEffect(() => {
    async function loadRepos() {
      await api.get("/users/simpletextbr/repos").then((response) => {
        setRepos(response.data);
      });
    }

    loadRepos();
  }, []);

  return (
    <aside name="home">
      <h1>MY REPOS</h1>
      <div
        className="docs"
       
      >
        <div className="repoRow--left" onClick={handleLeftArrow}>
          <FiChevronLeft size={40} color="#000000" />
        </div>
        <div className="repoRow--right" onClick={handleRightArrow}>
          <FiChevronRight size={40} color="#000000" />
        </div>
        <div className="docs--area"  style={{ marginLeft: scrollX, width: repos.length * 320}}>
          {repos === undefined
            ? []
            : repos.map((repo) => (
                <a href={`https://github.com/${repo.full_name}`} target="_blank" rel="noopener noreferrer" key={repo.id}>
                  <div className="doc">
                    <div className="reponame">
                      <p>{repo.full_name}</p>
                    </div>
                    <div className="repodetail">
                      <p>{repo.description}</p>
                    </div>
                  </div>
                </a>
              ))}
        </div>
      </div>
      <div id="#aboutme" className="presentation">
        <p>
          Hello{" "}
          <span role="img" aria-label="aceno">
            🖐
          </span>
          , My name is Wesley Praça and welcome to my presentation my friend
          Recruiter, okay i know that you may be in a little hurry, so you can
          download my resume below on site. if you still here, we go start the
          presentation.
        </p>
        <p>
          Now as you can see, i appreciate too much JavaScript, Node.JS,
          React.JS and React Native, Besides that i also like to venture in
          another types programming language like php, java, phyton and any
          others.
        </p>
        <p>
          Well, you too can see on my resume in my experiences that i am a good
          leader, i have good english, like new challenges and i'm helpful.
        </p>
        <p>
          Well, this is me if you liked can contact on my social medias, mail or
          my personal number, everything below on footer of site for your
          convenience.
        </p>
        <p className="end">
          Thank you for following up here, have a beautiful day and a nice job!{" "}
          <span role="img" aria-label="piscada">
            😉
          </span>
        </p>
      </div>
    </aside>
  );
}
