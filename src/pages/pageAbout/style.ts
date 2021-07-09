import styled, { css } from 'styled-components'
import { buttonDefault, title } from '../../styles/globalStyles'

interface IScroll{
  scroll:number,
  progress?: number,
}

interface IPageAbout {
  image?:string,
  load?:boolean,
  progress?: number,
}


export const main = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 100vw;

.address{
  width: 100%;
  height: 60px;
  background-color: #FF0000;
  border-radius: 8px;
}

@keyframes slideup {
  from{
    padding-top: 30px;
    opacity: 0;
  }
  to{
    padding-top: 0px;
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
export const titleAbout = styled(title)`
  margin-left: 20px;
`

export const text = styled.div`
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
`

export const presentation = styled.div`
  display:flex;
  flex-direction: row;

  @media screen and (max-width: 1200px){
    display:grid;
    grid-template-columns: 1fr;
  }

`

export const address = styled.div`
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
`

export const image = styled.div`
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

  ${({ image, load }:IPageAbout) =>  load &&css`
        background-size: cover;
        background-image: url(${image});
        transform: scale(1);
          :before {
            background:none;
          }

  `}

`

export const cv = styled(buttonDefault)`
  background: #1787EE;
  color: #ffffff;
  width:180px;
  margin-bottom: 60px;
  opacity: 0;
  overflow:hidden;
`

export const titleSkills  = styled(title)`
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

export const skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
`

export const skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const progressBar = styled.div`
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
      height: 20px;
      margin-top: 3px;
      border-radius: 1rem;
      width: 0%;
      transition: all ease 4s;
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

      ${({ scroll, progress }:IScroll) => scroll > 280 && css`
        width: ${progress}%;
        animation: move 4s linear forwards ;
      `}

      p{
        margin-right: 10px;
      }
  }

    .progressBar2nd{
      background-color: rgb(62, 122, 235);
      color:#FFFFFF;
      font-size: 16px;
      text-align: right;
      height: 20px;
      margin-top: 3px;
      border-radius: 1rem;
      width: 0%;
      transition: all ease 4s;
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

      ${({ scroll, progress }:IScroll) => scroll > 760 && css`
        width: ${progress}%;
        animation: move 4s linear forwards ;
      `}

      p{
        margin-right: 10px;
      }
  }
`
