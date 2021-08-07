import React from 'react'
import { Link } from 'react-router-dom'

import { FiChevronRight } from 'react-icons/fi'
import * as S from './style'

interface ITitle {
  title: string;
}

function TitlePages ({ title }:ITitle):JSX.Element{

  return (
    <S.Title>
      <div className="link">
        <Link to="/wesleypraca"><p className="home">HOME<FiChevronRight size={16} /></p> </Link>
        <p>{title.toUpperCase()} <FiChevronRight size={16} color="#727272" /></p>
      </div>
      <p>{title}</p>
    </S.Title>
  )

}

export default TitlePages
