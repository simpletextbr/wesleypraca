import React from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './style'
import { FiArrowRight } from 'react-icons/fi'

import logo from '../../assets/LOGO.svg'

function home ():JSX.Element{
  const history = useHistory()

  return (
    <S.main >
      <img className="logo" src={logo} alt="Logotipo do dev Wesley Praça" onClick={() => history.push('/')}/>
      <S.body >
        <S.mainBackground />
        <S.presentation>
          <p className="function">FULLSTACK DEVELOPER</p>
          <p className="me">I´m Wesley Praça</p>
          <S.rowbuttons>
            <S.about onClick={() => history.push('/about')}>
              <p>MORE ABOUT ME</p>
              <FiArrowRight size={20} color="#ffffff" />
            </S.about>
            <S.hire onClick={() => history.push('/contact')}>
              <p>HIRE ME</p>
              <FiArrowRight size={20} color="#000000" />
            </S.hire>
          </S.rowbuttons>
        </S.presentation>
      </S.body>
      <S.footer>Copyright ©2021 All rights reserved.</S.footer>
    </S.main>
  )
}

export default home
