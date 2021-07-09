import styled from 'styled-components'


export const title = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 60px;
max-width: 100vw;
font-weight: 200;
font-size: 60px;

div + p{
  margin-top: 10px;
}


.link{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 600;


  svg{
    color: #727272;
    padding-top: 4px;
    transition: all ease 400ms;
  }

  .home{
    cursor: pointer;
    transition: all ease 400ms;
    color:#000000;

    :hover{
      cursor: pointer;
      color: #1787ee;

        svg{
        color: #1787ee;
        transform: rotate(-180deg) translateY(-4px);
        }
      }
  }

  p{
    font-size: 16px;
  }

}
`
