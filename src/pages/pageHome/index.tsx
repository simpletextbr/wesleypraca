import React from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './style'
import { FiArrowRight } from 'react-icons/fi'

import logo from '../../assets/LOGO.svg'

function PageHome ():JSX.Element{
  const history = useHistory()

  return (
    <S.Main >
      <img className="logo" src={logo} alt="Logotipo do dev Wesley Praça" onClick={() => history.push('/wesleypraca')}/>
      <S.Body >
        <S.MainBackground />
        <S.Presentation>
          <p className="function">FULLSTACK DEVELOPER</p>
          <p className="me">I´m Wesley Praça</p>
          <S.Rowbuttons>
            <S.About onClick={() => history.push('/wesleypraca/about')}>
              <p>MORE ABOUT ME</p>
              <FiArrowRight size={20} color="#ffffff" />
            </S.About>
            <S.Hire onClick={() => history.push('/wesleypraca/contact')}>
              <p>HIRE ME</p>
              <FiArrowRight size={20} color="#000000" />
            </S.Hire>
          </S.Rowbuttons>
        </S.Presentation>
      </S.Body>
      <S.Footer>Copyright ©2021 All rights reserved.</S.Footer>
    </S.Main>
  )
}

export default PageHome
