import styled, { css } from 'styled-components'

interface IShow{
  show:boolean;
  scroll: number;
}


export const header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
  margin-left: 20px;
  transition: all ease 400ms;
  position: relative;
  ${({ scroll }:IShow) => scroll > 10 &&
    css`
      div{
      position:fixed;
      background-color: #FF0000;

        img{
          transform: scale(0.5)
        }

        svg{
        margin-left: auto;
        cursor: pointer;
        }
      }
    `}

  img{
    transition: all ease 400ms;
    transform: scale(1);
  }



  .menu{
    position: absolute;
    right: 2.8%;
    top: 8.5%;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
    text-align: left;
    font-weight: 400;
    border-radius: 4px;
    transition: all ease 250ms;
    margin-top: 30px;
    transform: translateY(0px);
    opacity:0;
    max-height: 0;
    overflow:hidden;
    ${({ show }:IShow) => show &&
      css`
        transform: translateY(20px) !important;
        opacity: 1;
        max-height: 160px;
        overflow:none;
        `}

    p{
      cursor: pointer;

      :hover{
        color: #1787EE;
      }
    }

    .active{
        color: #1787EE;
        padding: 2px 10px;
      }

    .default{
      color: #000000;
      padding: 2px 10px;
      }
  }

  svg{
      margin-left: auto;
      cursor: pointer;
    }
`
