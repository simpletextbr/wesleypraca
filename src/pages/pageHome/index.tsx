import React from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './style'
import { FiArrowRight } from 'react-icons/fi'

import logo from '../../assets/LOGO.svg'


function home():JSX.Element{
  const history = useHistory()

  return(
    <S.main >
      <img className="logo" src={logo} alt="Logotipo do dev Wesley Praça" onClick={() => history.push('/wesleypraca/')}/>
        <S.body >
          <S.mainBackground />
          <S.menu>
            <p onClick={() => history.push('/wesleypraca/')}>HOME</p>
            <p onClick={() => history.push('/wesleypraca/about')}>ABOUT</p>
            <p onClick={() => history.push('/wesleypraca/contact')}>CONTACT</p>
            {/* <p onClick={() => history.push('/wesleypraca/exp')}>EXPERIENCES</p>
            <p onClick={() => history.push('/wesleypraca/services')}>SERVICES</p> */}
          </S.menu>
          <S.presentation>
            <p className="function">FULLSTACK DEVELOPER</p>
            <p className="me">I´m Wesley Praça</p>
            <S.rowbuttons>
              <S.about onClick={() => history.push('/wesleypraca/about')}>
                <p>MORE ABOUT ME</p>
                <FiArrowRight size={20} color="#ffffff" />
              </S.about>
              <S.hire onClick={() => history.push('/wesleypraca/contact')}>
                <p>HIRE ME</p>
                <FiArrowRight size={20} color="#000000" />
              </S.hire>
            </S.rowbuttons>
            {/* <S.mobileMenu>
            <p onClick={() => history.push('/wesleypraca/exp')}>EXPERIENCES</p>
            <p onClick={() => history.push('/wesleypraca/services')}>SERVICES</p>
            <p onClick={() => history.push('/wesleypraca/contact')}>CONTACT</p>
          </S.mobileMenu> */}
          </S.presentation>
        </S.body>
        <S.footer>Copyright ©2021 All rights reserved.</S.footer>
    </S.main>
  )
}

export default home;
