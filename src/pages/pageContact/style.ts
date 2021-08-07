import styled, { css } from 'styled-components'
import { title, buttonDefault } from '../../styles/globalStyles'

interface IMessage{
  send: boolean;
}

export const Main = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;

  @keyframes slideup {
  from{
    transform: translateY(60px);
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

export const Box = styled.div`

@media screen and (max-width: 1000px){
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.5);
  width: 60%;
  height: 860px;
  margin: 20px auto;
  animation: slideup 1s forwards;

  .open{
    color: #9d9d9d;
    margin-left: 20px;
    max-width: 100%;
  }
}

@media screen and (min-width: 1000px){
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.5);
  width: 60%;
  height: 460px;
  margin: 20px auto;
  animation: slideup 1s forwards;

  .open{
    color: #9d9d9d;
    margin-left: 20px;
    max-width: 100%;
  }
}

`

export const TitleContact = styled(title)`
  margin-left: 20px;
  margin-top: 20px;
  font-size:20px;

`

export const TitleContacts = styled(title)`
  margin-left: 20px;
  margin-top: 20px;
  font-size:16px;
  font-weight: 400;
  text-align:center;

`

export const Text = styled.div`
@media screen and (max-width:1000px){
  width: 100%;
  height: 50%;

  .socialMedias{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin: 60px auto;
    row-gap: 20px;

    .Linkedin-contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: slideup 500ms forwards;
      transition: all ease 1s;

      .contactTitle{
        display: none;
      }
    }

    .Instagram-contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: slideup 1s forwards;
      transition: all ease 1s;

      .contactTitle{
        display: none;
      }

    }

    .E-mail-contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: slideup 1.5s forwards;
      transition: all ease 1s;

      .contactTitle{
        display: none;
      }
    }

    .Github-contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: slideup 2s forwards;
      transition: all ease 1s;

      .contactTitle{
        display: none;
      }

    }

    img{
      margin: auto;
      width: 100px;
      padding: 10px;
      transform: scale(0.8);
      transition: all ease 400ms;

      :hover{
        transform: scale(0.9);
      }
    }
  }

}


@media screen and (min-width:1000px){
  width: 50%;
  height: 100%;

  .mobileShow{
      display: none;
    }


  .socialMedias{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin: 60px auto;
    row-gap: 20px;

    .Linkedin-contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: slideup 500ms forwards;
      transition: all ease 1s;

      .contactTitle{
        display: none;
      }
    }

    .Instagram-contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: slideup 1s forwards;
      transition: all ease 1s;

      .contactTitle{
        display: none;
      }

    }

    .E-mail-contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: slideup 1.5s forwards;
      transition: all ease 1s;

      .contactTitle{
        display: none;
      }
    }

    .Github-contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: slideup 2s forwards;
      transition: all ease 1s;

      .contactTitle{
        display: none;
      }

    }

    img{
      margin: auto;
      width: 100px;
      padding: 10px;
      transform: scale(0.8);
      transition: all ease 400ms;

      :hover{
        transform: scale(0.9);
      }
    }
  }

}

`

export const Wpp = styled.div`

@media screen and (max-width: 1000px){
  width: 100%;
  height: 50%;

 .inicial{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2bb201;
  transition: all ease 1s;
  animation: slideup 400ms forwards;

  transform: translate(0px);
  opacity: 1;
  overflow: none;

  img{
    width: 60px;
    height: 60px;
  }

  ${({ send }:IMessage) => send === true &&
    css`
      transform: translate(100px);
      opacity: 0;
      overflow: hidden;
    `
}
 }
 .contact{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  animation: slideup 400ms forwards;

  img{
    width: 60px;
    height: 60px;
  }

  ${({ send }:IMessage) => send === false &&
    css`
      transform: translate(0px);
      opacity: 1;
      overflow: none;
    `
}
 }
}

@media screen and (min-width:1000px){
  width: 50%;
  height: 100%;

 .inicial{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2bb201;
  transition: all ease 1s;
  animation: slideup 400ms forwards;

  transform: translate(0px);
  opacity: 1;
  overflow: none;

  img{
    width: 60px;
    height: 60px;
  }

  ${({ send }:IMessage) => send === true &&
    css`
      transform: translate(100px);
      opacity: 0;
      overflow: hidden;
    `
}
 }
 .contact{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  animation: slideup 400ms forwards;

  img{
    width: 60px;
    height: 60px;
  }

  ${({ send }:IMessage) => send === false &&
    css`
      transform: translate(0px);
      opacity: 1;
      overflow: none;
    `
}
 }
}
`

export const Message = styled(buttonDefault)`
background-color: #FFFFFF;
margin-top: 40px;
color: #2bb201;
`

export const Close = styled.div`
color: #FFFFFF;
position: absolute;
top: 0;
right: 0;
margin: 26px 23px;
transform: scale(0.9);
transition: all ease 200ms;
cursor: pointer;

 :hover{
   transform: scale(1)
 }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  background-color: #50a3f2;
  border-radius: 8px;

  button{
    border: 0px;
    background-color: transparent;
    width: 100%;
  }

  input{
    border: 0px;
    border-bottom: 1px dashed #FFFFFF;
    background-color: transparent;
    width: 80%;
    height: 26px;
    padding-left: 10px;
    margin-top: 20px;

    :first-line{
      color: #FFFFFF;
    }

  }

  select{
    border: 0px;
    border-bottom: 1px dashed #FFFFFF;
    background-color: transparent;
    width: 80%;
    height: 26px;
    padding-left: 5px;
    margin-top: 20px;
    color: #FFFFFF;

    option{
      color: #000000;
    }
  }

  textarea{
    border: 0px;
    border-bottom: 1px dashed #FFFFFF;
    background-color: transparent;
    margin-top: 20px;
    width: 80%;
    height: 100px;
    padding-left: 10px;
    resize: none;
    color: #FFFFFF;

    :first-line{
      color: #FFFFFF;
    }
  }
`

export const Send = styled(buttonDefault)`
  background-color: #FFFFFF;
  color: #50a3f2;
  width: 60%;
  margin: 40px auto;
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
