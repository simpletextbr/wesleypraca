import styled, { css } from 'styled-components'
import { buttonDefault, title } from '../../styles/globalStyles'

interface IScroll{
  scroll:number,
  progress?: number,
  details?:boolean,
}

interface IPageAbout {
  image?:string,
  load?:boolean,
  progress?: number,
  type?:string,
}

export const Main = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 100vw;

@keyframes slideup {
  from{
    transform: translateY(30px);
    opacity: 0;
  }
  to{
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slidedown {
  from{
    transform: translateY(-30px);
    opacity: 0;
  }
  to{
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes load {
  from {
      left: 0px;
  }
  to   {
      left: 66%;
  }
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;

  }
}


`

export const TitleAbout = styled(title)`
  margin-left: 20px;
`

export const Text = styled.div`
  font-size: 18px;
  animation: slideup 1s forwards;
  margin-left: 20px;


    .presentation{
    font-size: 60px;
    }

    .text{
      color:#9d9d9d;
      margin-top: 10px;
    }

    .text + .text {
      margin-top: 10px;
    }

@media screen and (max-width: 700px){
  font-size: 16px;
  animation: slideup 1s forwards;
  margin-left: 20px;


    .presentation{
    font-size: 30px;
    }

    .text{
      color:#9d9d9d;
      margin-top: 10px;
    }

    .text + .text {
      margin-top: 10px;
    }

}
`

export const Presentation = styled.div`
  display:flex;
  flex-direction: row;

@media screen and (max-width: 1200px){
  display:flex;
  flex-direction: column;
}

`

export const Address = styled.div`

@media screen and (max-width: 500px){
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;

    .datagroup{
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      animation: slideup 1s forwards;
      align-self: center;
      width: 100%;


    .data{
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 40%;
      margin-left: auto;
      margin-right: auto;
    }

    .nameData{
      display: none;
    }

    .detail{
      color:#000000;
      font-size: 14px;
      margin-top: 4px;

      a{
        color:#1787EE;
      }
    }
  }
}

@media screen and (min-width: 500px) and (max-width: 700px){
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;

    .datagroup{
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      animation: slideup 1s forwards;
      align-self: center;
      width: 100%;



    .data{
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }

    .detail{
      color:#1787EE;


      a{
        color:#1787EE;
      }
    }
  }
}

@media screen and (min-width: 700px) and (max-width: 1200px){
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;

    .datagroup{
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: space-around;
      font-weight: 900;
      animation: slideup 1s forwards;
      align-self: center;

    .data{
      display:flex;
      flex-direction: row;
      align-items: center;
    }

    .detail{
      color:#1787EE;


      a{
        color:#1787EE;
      }
    }

    p + p {
      margin-left: auto;
      margin-right: 20px;
    }
  }
}

@media screen and (min-width: 1200px){
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;

    .datagroup{
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: space-around;
      font-weight: 900;
      animation: slideup 1s forwards;

    .data{
      display:flex;
      flex-direction: row;
      align-items: center;
    }

    .detail{
      color:#1787EE;


      a{
        color:#1787EE;
      }
    }

    p + p {
      margin-left: auto;
      margin-right: 20px;
    }
  }
}
`

export const Card = styled.div`

  @media screen and (max-width: 500px){
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    ${({ type }:IPageAbout) => type === 'Zip Code' && css`
      display: none;
    `}
    ${({ type }:IPageAbout) => type === 'Date of Birth' && css`
      display: none;
    `}
    ${({ type }:IPageAbout) => type === 'Adress' && css`
      display: none;
    `}
  }

  @media screen and (min-width: 500px) and (max-width: 700px){
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }


  @media screen and (min-width: 700px) and (max-width: 1200px){
    display:flex;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1200px){
    display:flex;
    flex-direction: row;
    align-items: center;
  }
`

export const MobileTitle = styled(title)`
  @media screen and (max-width: 500px){
      display:flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }

  @media screen and (min-width: 500px){
    display: none;
  }

`

export const Image = styled.div`

@media screen and (max-width: 1200px){
  width: 220px;
  height: 220px;
  align-self: center;
  position: relative;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #DDDBDD;
  transition: all ease 400ms;
  transform: scale(0.9);
  margin-top: 20px;
    :before {
      content: '';
      display: block;
      position: absolute;
      left: -150px;
      top: 0;
      height: 100%;
      width: 80px;
      background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
      animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }

  ${({ image, load }:IPageAbout) => load &&
    css`
      background-size: cover;
      background-image: url(${image});
      transform: scale(1);
        :before {
          background:none;
        }
  `}
}

@media screen and (min-width: 1200px){
  width: 220px;
  height: 220px;
  align-self: center;
  position: relative;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #DDDBDD;
  transition: all ease 400ms;
  transform: scale(0.9);
    :before {
      content: '';
      display: block;
      position: absolute;
      left: -150px;
      top: 0;
      height: 100%;
      width: 80px;
      background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
      animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }

  ${({ image, load }:IPageAbout) => load && css`
        background-size: cover;
        background-image: url(${image});
        transform: scale(1);
          :before {
            background:none;
          }

  `}
}

`

export const Cv = styled(buttonDefault)`
  background: #1787EE;
  color: #ffffff;
  width:180px;
  margin: 40px auto;
  opacity: 0;
  overflow:hidden;
`

export const TitleSkills = styled(title)`
  font-size:20px;
  margin-right: 20px;
  padding-top: 30px;
  opacity: 0;
  overflow:hidden;
  transition: all ease 2s;
  ${({ scroll }:IScroll) => scroll > 100 &&
  css`
    padding-top: 0px;
    opacity: 1;
    overflow:none;
  `}
`

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px auto;
  transition: all ease 2s;

  .title{
    font-size:36px;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 200 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
  }

  .title2nd{
    font-size:36px;
    margin-top: 30px;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 700 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
  }

  .skillgroup{

    @media screen and (max-width: 700px){
    display:grid;
    grid-template-columns: 1fr ;
    column-gap: 10px;
    row-gap: 20px;
    width: 90%;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 660 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
    }

    @media screen and (min-width: 700px) and (max-width: 900px){
    display:grid;
    grid-template-columns: 1fr 1fr ;
    column-gap: 10px;
    row-gap: 20px;
    width: 90%;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 230 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
    }

    @media screen and (min-width: 900px) and (max-width: 1200px){
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 20px;
    width: 90%;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 230 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
    }

    @media screen and (min-width: 1200px){
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 20px;
    width: 90%;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 230 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
    }
  }

  .skillgroup2nd{
    @media screen and (max-width: 700px){
    display:grid;
    grid-template-columns: 1fr ;
    column-gap: 10px;
    row-gap: 20px;
    width: 90%;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 2530 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
    }

    @media screen and (min-width: 700px) and (max-width: 900px){
    display:grid;
    grid-template-columns: 1fr 1fr ;
    column-gap: 10px;
    row-gap: 20px;
    width: 90%;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 230 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
    }

    @media screen and (min-width: 900px) and (max-width: 1200px){
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 20px;
    width: 90%;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 230 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
    }

    @media screen and (min-width: 1200px){
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 20px;
    width: 90%;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 230 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
    }
  }
`

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const ProgressBar = styled.div`
  width: 100%;
  height: 26px;
  background-color: #e9e9e9;
  border-radius: 8px;
  margin-top: 6px;

    .progressBar{
      background-color: rgb(62, 122, 235);
      color:#FFFFFF;
      font-size: 16px;
      text-align: right;
      height: 26px;
      border-radius: 1rem;
      width: 0%;
      transition: all ease 2s;
      background-image: linear-gradient(
        -45deg,
        rgba(255, 255, 255, .2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, .2) 50%,
        rgba(255, 255, 255, .2) 75%,
        transparent 75%,
        transparent
      );
      z-index: 1;
      background-size: 50px 50px;
      ${({ scroll, progress }:IScroll) => scroll > 660 && css`
        width: ${progress}%;
        animation: move 2s linear forwards ;
      `}

      @media screen and (min-width: 600px){
        ${({ scroll, progress }:IScroll) => scroll > 280 && css`
          width: ${progress}%;
          animation: move 2s linear forwards ;
        `}
      }

      p{
        margin-right: 10px;
        padding-top: 3px;

      }
  }

    .progressBar2nd{
      background-color: rgb(62, 122, 235);
      color:#FFFFFF;
      font-size: 16px;
      text-align: right;
      height: 26px;
      border-radius: 1rem;
      width: 0%;
      transition: all ease 2s;
      background-image: linear-gradient(
        -45deg,
        rgba(255, 255, 255, .2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, .2) 50%,
        rgba(255, 255, 255, .2) 75%,
        transparent 75%,
        transparent
      );
      z-index: 1;
      background-size: 50px 50px;
      ${({ scroll, progress }:IScroll) => scroll > 2530 && css`
          width: ${progress}%;
          animation: move 2s linear forwards ;
        `}

      @media screen and (min-width: 600px){
        ${({ scroll, progress }:IScroll) => scroll > 760 && css`
          width: ${progress}%;
          animation: move 2s linear forwards ;
        `}
      }

      p{
        margin-right: 10px;
        padding-top: 3px;
      }
  }
`

export const TitleRepos = styled(title)`
  font-size:20px;
  margin-right: 20px;
  padding-top: 30px;
  opacity: 0;
  overflow:hidden;
  transition: all ease 2s;
  ${({ scroll }:IScroll) => scroll > 1000 &&
  css`
    padding-top: 0px;
    opacity: 1;
    overflow:none;
  `}
`

export const Repos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px auto;
  transition: all ease 2s;

  .title{
      font-size:36px;
      padding-top: 30px;
      opacity: 0;
      overflow:hidden;
      transition: all ease 2s;

      ${({ scroll }:IScroll) => scroll > 870 &&
      css`
        padding-top: 0px;
        opacity: 1;
        overflow:none;
      `}
    }

  .repositories{

    @media screen and (max-width: 700px) {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      max-width: 90vw;
      padding-top: 30px;
      opacity: 0;
      overflow:hidden;
      transition: all ease 2s;

      ${({ scroll }:IScroll) => scroll > 3300 &&
      css`
        padding-top: 0px;
        opacity: 1;
        overflow:none;
      `}
    }

    @media screen and (min-width: 700px) and (max-width: 900px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      column-gap: 40px;
      max-width: 90vw;
      padding-top: 30px;
      opacity: 0;
      overflow:hidden;
      transition: all ease 2s;

      ${({ scroll }:IScroll) => scroll > 1100 &&
      css`
        padding-top: 0px;
        opacity: 1;
        overflow:none;
      `}
    }


    @media screen and (min-width: 900px) and (max-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-content: center;
      column-gap: 40px;
      max-width: 90vw;
      padding-top: 30px;
      opacity: 0;
      overflow:hidden;
      transition: all ease 2s;

      ${({ scroll }:IScroll) => scroll > 1100 &&
      css`
        padding-top: 0px;
        opacity: 1;
        overflow:none;
      `}
    }

    @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    column-gap: 40px;
    max-width: 90vw;
    padding-top: 30px;
    opacity: 0;
    overflow:hidden;
    transition: all ease 2s;

    ${({ scroll }:IScroll) => scroll > 1100 &&
    css`
      padding-top: 0px;
      opacity: 1;
      overflow:none;
    `}
    }
  }

  .doc {
    display: inline-block;
    max-width: 320px;
    height: 160px;
    transform: scale(0.9);
    transition: all ease 400ms;
  }

  .doc:hover {
    transform: scale(1);

    .repodetail{
      opacity: 1;
      transform: translateY(0px);
    }

    .reponame {
    transform: translateY(0px);
    transition: all ease 400ms;
  }


  }

  .show{
    @media screen and (max-width: 1200px){
      display:flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: #3e7aeb;
      font-weight: 400;
      cursor: pointer;
      animation: slidedown 1s forwards;
      margin-bottom: 40px;


      svg {
        margin-left: 6px;
      }
    }

    @media screen and (min-width: 1200px) {
      display: none;

    }
  }

  .reponame {
    width: 220px;
    background-color: #3e7aeb;
    padding: 20px;
    font-size: 12px;
    border-radius: 4px;
    color: #ffffff;
    transform: translateY(20px);
    transition: all ease 400ms;
    ${({ details }: IScroll) => details === true && css`
          opacity: 1;
          transform: translateY(0px);
    `}
  }

  .repodetail {
        display: flex;
        width: 220px;
        height: max-content;
        background-color: #e9e9e9;
        border-radius: 8px;
        padding: 6px;
        color: #000000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all ease 400ms;
        ${({ details }: IScroll) => details === true && css`
          opacity: 1;
          transform: translateY(0px);
        `}

    }
`

export const Footer = styled.footer`
@media screen and (max-width: 1200px){
  display: flex;
  text-align: center;
  font-size: 1rem;
  color: #000000;
}


@media screen and (min-width: 1200px){
  display: flex;
  text-align: center;
  font-size: 1rem;
  color: #000000;
  margin-bottom: 10px
}
`
