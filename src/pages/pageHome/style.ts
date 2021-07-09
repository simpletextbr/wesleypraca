import styled  from 'styled-components'
import { buttonDefault } from '../../styles/globalStyles'


export const main  = styled.div `


@media screen and (min-width: 1200px){
  display: flex;
  align-items: center;
  justify-content: center;
  height:100vh;

  .logo {
    position: absolute;
    top: 0;
    left: 0;
  }
}
`

export const body = styled.div`

@media screen and (min-width: 1200px){
  display: flex;
  width:100%;
  height:100%;
  overflow: hidden;
}
`

export const mainBackground =styled.div `

@media screen and (max-width: 1200px){
  width: 90vw;
  height:80vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(0.35deg, #003E78 0.32%, #1787EE 99.72%);
  box-shadow: 2px 2px 6px 4px  rgba(0, 0, 0, 0.5);

}

@media screen and (min-width: 1200px){
  width: 1348px;
  height:1248px;
  background: linear-gradient(0.35deg, #003E78 0.32%, #1787EE 99.72%);
  transform: rotate(27deg);
  box-shadow: 2px 2px 6px 4px  rgba(0, 0, 0, 0.5);
}
`

export const menu = styled.div`
  display:none;
@media screen and (min-width: 1200px){
  position: absolute;
  top: 0;
  left: 20%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;


  p{
    font-size:16px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    transition: all ease 0.2s;
    transform: scale(0.8);

    :hover{
      transform:scale(1);
    }
  }

  p + p {
    margin-left: 20px;
  }
}
`

export const presentation = styled.div`
@media screen and (max-width: 700px){
  position: absolute;
  top: 35%;
  bottom: 50%;
  right: 20%;
  display:flex;
  flex-direction:column;

  .function {
    font-size:14px;
    font-weight:700;
  }

  .me{
    font-size:40px;
    font-weight:700;
    color: #ffffff;
    max-width:260px
  }
}

@media screen and (min-width: 700px) and (max-width: 1200px){
  position: absolute;
  top: 35%;
  bottom: 50%;
  right: 30%;
  display:flex;
  flex-direction:column;

  .function {
    font-size:23px;
    font-weight:700;
  }

  .me{
    font-size:60px;
    font-weight:700;
    color: #ffffff;
    max-width:400px
  }
}


@media screen and (min-width: 1200px){
  position: absolute;
  top: 35%;
  bottom: 50%;
  right: 30%;
  display:flex;
  flex-direction:column;

  .function {
    font-size:36px;
    font-weight:700;
  }

  .me{
    font-size:96px;
    font-weight:700;
    color: #ffffff;
    max-width:700px
  }
}
`

export const rowbuttons = styled.div`
@media screen and (max-width: 1200px){
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-top: 20px;



  .hire{
    display: flex;
    flex-direction: row;

    svg {
      margin-left: 10px;
    }
  }
}

@media screen and (min-width: 1200px){
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-top: 20px;



  .hire{
    display: flex;
    flex-direction: row;

    svg {
      margin-left: 10px;
    }
  }
}
`

export const about = styled(buttonDefault)`

@media screen and (max-width:700px){
  background: #1787EE;
  color: #ffffff;
  width:120px;
}

@media screen and (min-width: 700px){
  background: #1787EE;
  color: #ffffff;
  width:180px;
}
`

export const hire = styled(buttonDefault)`

@media screen and (max-width:700px){
  background: #ffffff;
  width:100px;
  margin-left: 6px;
}

@media screen and (min-width: 700px){
  background: #ffffff;
  width:160px;
  margin-left: 6px;
}
`

export const mobileMenu = styled.div `

display: none;

@media screen and (max-width: 700px) {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  margin-top: 20px;


  p{
    font-size:16px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;

  }

}



@media screen and (min-width: 700px) and (max-width: 1200px){
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  margin-top: 20px;


  p{
    font-size:16px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;

  }

}
`

export const footer = styled.footer`
@media screen and (max-width: 1200px){
  position: absolute;
  bottom: 0;
  left: 30%;
  right: 30%;
  text-align: center;
  font-size: 1rem;
  color: #ffffff;
}


@media screen and (min-width: 1200px){
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 10px
}
`
