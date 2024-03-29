import React, { useState, useEffect } from 'react'

import * as S from './style'
import profilePic from '../../assets/ProfilePic.jpg'
import { FiFileText, FiEye } from 'react-icons/fi'
import { Header, TitlePages } from '../../components'

import data from '../../database/myData'
import skills from '../../database/skills'
import softSkills from '../../database/softSkills'
import api from '../../services/api'

interface IRp {
  id: number;
  full_name: string;
  name: string;
  description?: string;
}

function PageAbout ():JSX.Element{
  const [ scroll, setScroll ] = useState(Number)
  const [ loadEnd, setLoadEnd ] = useState(false)
  const [ repos, setRepos ] = useState([])
  const [ showDetails, setShowDetails ] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset)
    }

    if (loadEnd === false) {
      setInterval(() => { setLoadEnd(true) }, 1600)
    }

    async function loadRepos (){
      const response = await api.get('/users/simpletextbr/repos')
      setRepos(response.data)
    }

    loadRepos()
  }, [])

  return (
    <>
      <Header page="/about"/>
      <TitlePages title="About Me"/>
      <S.Main>
        <S.Presentation>
          <S.Text>
            <S.TitleAbout>ABOUT ME</S.TitleAbout>
            <p className="presentation">A Fullstack Developer with JavaScript Living in Brazil.</p>
            <p className="text">Guided to challenges, Passionate about information security and content creator in my spare time, all of this would define me very well, but behind that I am a Systems Analyst and Developer, BPO and FullStack.
            </p>
            <p className="text">A lot of this because from an early age I liked and adapted to follow this career as an IT professional and that´s why I can say that I´ve done a bit of everything in this area until I specialize in Javascript, React (Js and Native), Node JS.
            </p>
          </S.Text>
          <S.Address>
            <S.Image image={profilePic} load={loadEnd}/>
            <S.MobileTitle>Personal Data</S.MobileTitle>
            <div className="datagroup">
              {data.map((dt, index) => (
                <S.Card key={index} type={dt.type}>
                  <p className="nameData">{dt.type}:</p>
                  <p className="detail">{dt.name}</p>
                </S.Card>
              ))}
            </div>
          </S.Address>
        </S.Presentation>
        <a href="https://drive.google.com/file/d/1EKC5AT4jUCQxM20ufhX84CnXxMHznW1U/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <S.Cv >DOWNLOAD CV
            <FiFileText size={20} color="#FFFFFF" />
          </S.Cv>
        </a>
        <S.Skills scroll={scroll}>
          <S.TitleSkills scroll={scroll}>SKILLS</S.TitleSkills>
          <p className="title">Hard Skills</p>
          <div className="skillgroup">
            { skills.map((sk, index) => (
              <S.Skill key={index}>
                <p>{sk.name}</p>
                <S.ProgressBar progress={sk.skill} scroll={scroll}>
                  <div className="progressBar"><p>{sk.skill}%</p></div>
                </S.ProgressBar>
              </S.Skill>
            ))}
          </div>
          <p className="title2nd">Soft Skills</p>
          <div className="skillgroup2nd">
            { softSkills.map((sk, index) => (
              <S.Skill key={index}>
                <p>{sk.name}</p>
                <S.ProgressBar progress={sk.skill} scroll={scroll}>
                  <div className="progressBar2nd"><p>{sk.skill}%</p></div>
                </S.ProgressBar>
              </S.Skill>
            ))}
          </div>
        </S.Skills>
        <S.Repos scroll={scroll} details={showDetails}>
          <S.TitleRepos scroll={scroll}>REPOS</S.TitleRepos>
          <p className="title">GITHUB REPOSITORIES</p>
          <p className="show" onClick={() => setShowDetails(showDetails === true ? false : true)}>SHOW DETAILS <FiEye size={16}/></p>
          <div className="repositories">
            { repos.map((rp:IRp) => (
              <a href={`https://github.com/${rp.full_name}`} target="_blank" rel="noopener noreferrer" key={rp.id}>
                <div className="doc">
                  <div className="reponame">
                    <p>{rp.full_name}</p>
                  </div>
                  <div className="repodetail">
                    <p>{rp.description === '' ? 'Nada Por Aqui' : rp.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </S.Repos>
        <S.Footer>Copyright ©2021 All rights reserved.</S.Footer>
      </S.Main>
    </>
  )

}

export default PageAbout
