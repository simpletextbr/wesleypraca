import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { FiX, FiMenu } from 'react-icons/fi'
import logo from  '../../assets/LOGO.svg'
import * as S from '../../components/header/style'


interface IAbout{
  page:string;
}

function Header({page}:IAbout):JSX.Element{
  const [ showMenu, setShowMenu ] = useState(false)
  const [scroll, setScroll] = useState(Number)

  const history = useHistory()

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset)
    }
  }, []);

  return(
      <S.header show={showMenu} scroll={scroll}>
        <img src={logo} alt="Logotipo do dev Wesley Praça" />
        { !showMenu ?
          <FiMenu size={20} color="#000000" onClick={() => setShowMenu(true)}/> :
          <FiX size={23} color="#000000" onClick={() => setShowMenu(false)}/>
        }
              <div className="menu">
                <p className={page==="/" ? "active" : "default"} onClick={() =>  history.push('/wesleypraca/')}>HOME</p>
                <p className={page==="/about" ? "active" : "default"} onClick={() =>  history.push('/wesleypraca/about')}>ABOUT</p>
                <p className={page==="/contact" ? "active" : "default"} onClick={() =>  history.push('/wesleypraca/contact')}>CONTACT</p>
                {/* <p className={page==="/exp" ? "active" : "default"} onClick={() => history.push('/wesleypraca/exp')}>EXPERIENCES</p>
                <p className={page==="/services" ? "active" : "default"} onClick={() => history.push('/wesleypraca/services')}>SERVICES</p> */}
              </div>
      </S.header>
  )
}

export default Header
