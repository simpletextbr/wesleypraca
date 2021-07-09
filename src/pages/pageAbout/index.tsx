import React, { useState, useEffect } from 'react'

import * as S from './style';
import profilePic from '../../assets/ProfilePic.jpg'
import { FiFileText } from 'react-icons/fi'
import { Header, TitlePages } from '../../components/index'

import data from '../../database/myData'
import skills from '../../database/skills'
import softSkills from '../../database/softSkills'

function About():JSX.Element{
  const [scroll, setScroll] = useState(Number)
  const [loadEnd, setLoadEnd] = useState(false)

  console.log(scroll)

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset)
    }

    if(loadEnd === false) {
      setInterval(() => {setLoadEnd(true)}, 1600)
    }
  }, []);

  return (
    <>
      <Header page="/about"/>
      <TitlePages title="About Me"/>
      <S.main>
        <S.presentation>
          <S.text>
            <S.titleAbout>ABOUT ME</S.titleAbout>
            <p className="presentation">A Fullstack Developer with JavaScript Living in Brazil.</p>
            <p className="text">Guided to challenges, Passionate about information security and content creator in my spare time, all of this would define me very well, but behind that I am a Systems Analyst and Developer, BPO and FullStack.
            </p>
            <p className="text">A lot of this because from an early age I liked and adapted to follow this career as an IT professional and that´s why I can say that I´ve done a bit of everything in this area until I specialize in Javascript, React (Js and Native), Node JS.
            </p>
          </S.text>
          <S.address>
             <S.image  image={profilePic} load={loadEnd}/>
             <div className="datagroup">
                {data.map((dt, index) => (
                  <div className="data" key={index}>
                    <p>{dt.type}:</p>
                    <p className="detail">{dt.name}</p>
                  </div>
                ))}
              </div>
          </S.address>
        </S.presentation>
        <a href="https://drive.google.com/file/d/1EKC5AT4jUCQxM20ufhX84CnXxMHznW1U/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <S.cv >DOWNLOAD CV
            <FiFileText size={20} color="#FFFFFF" />
          </S.cv>
        </a>
        <S.skills scroll={scroll}>
          <S.titleSkills scroll={scroll}>SKILLS</S.titleSkills>
          <p className="title">Hard Skills</p>
            <div className="skillgroup">
            { skills.map((sk, index) => (
              <S.skill key={index}>
              <p>{sk.name}</p>
              <S.progressBar progress={sk.skill} scroll={scroll}>
                <div className="progressBar"><p>{sk.skill}%</p></div>
              </S.progressBar>
            </S.skill>
          ))}
          </div>
          <p className="title2nd">Soft Skills</p>
            <div className="skillgroup">
            { softSkills.map((sk, index) => (
              <S.skill key={index}>
              <p>{sk.name}</p>
              <S.progressBar progress={sk.skill} scroll={scroll}>
                <div className="progressBar2nd"><p>{sk.skill}%</p></div>
              </S.progressBar>
            </S.skill>
          ))}
          </div>
        </S.skills>
      </S.main>
    </>
  )

}

export default About;
