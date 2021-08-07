import React, { useState, useEffect } from 'react'

import * as S from './style'
import { FiSend, FiX } from 'react-icons/fi'
import Whatsapp from '../../assets/whatsapp.png'
import { Header, TitlePages } from '../../components'
import contacts from '../../database/contacts'

interface IContacts {
  name: string;
  picture: string;
  link: string;
}

function PageContact ():JSX.Element{
  const [ loadEnd, setLoadEnd ] = useState(false)
  const [ sendMessage, setSendMessage ] = useState(false)

  const [ name, setName ] = useState('')
  const [ enterpriseName, setEnterpriseName ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ message, setMessage ] = useState('')

  function clearFields (){
    setName('')
    setEnterpriseName('')
    setSubject('')
    setMessage('')
  }

  function sendWhatsAppMessage (event:React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    const presentation = `Olá Wesley meu nome é ${name} e sou da empresa ${enterpriseName}.`
    const body = `Estou entrando em contato pois ${subject !== 'Trocar uma ideia' ? `possuo uma ${subject} para você!` : `quero ${subject} com você!` }`
    const end = `${subject !== 'Trocar uma ideia' ? `Segue descrição: ${message}` : 'Abraços!' }`

    window.open(`https://api.whatsapp.com/send?phone=+5531982480793&text=${presentation}${body}${end}`, '_blank')
    clearFields()
    setSendMessage(false)
  }

  useEffect(() => {
    if (loadEnd === false) {
      setInterval(() => { setLoadEnd(true) }, 1600)
    }
  }, [])

  return (
    <>
      <Header page="/contact"/>
      <TitlePages title="Contact Me" />
      <S.Main>
        <S.Box>
          <S.Text>
            <S.TitleContact>Contact</S.TitleContact>
            <p className="open">I`m <span>Open</span> for any suggestions and works in world wide or just have a chat.</p>
            <S.TitleContacts>You can find me here!</S.TitleContacts>
            <div className="socialMedias">
              {contacts.map((contact:IContacts, index) => (
                <div className={`${contact.name}-contact`} key={index}>
                  <a href={contact.link} target="_blanck" rel="noopener noreferrer">
                    <img src={contact.picture} alt={contact.name} />
                  </a>
                  <p className="contactTitle">{contact.name}</p>
                </div>
              ))}
            </div>
          </S.Text>
          <S.Wpp send={sendMessage}>
            {sendMessage === false &&
          <div className="inicial">
            <img src={Whatsapp} alt="logotipo do app Whatsapp" />
            <S.Message onClick={() => setSendMessage(true)}>Send Message <FiSend size={16} /></S.Message>
          </div> }
            {sendMessage === true &&
          <div className="contact">
            <S.Close><FiX size={20} onClick={() => {
              setSendMessage(false)
              clearFields()
            }}/></S.Close>
            <S.Form onSubmit={sendWhatsAppMessage}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={event => setName(event.target.value)}
                required
              />
              <select
                value={subject}
                onChange={event => setSubject(event.target.value)}
                required
              >
                <option value="">Select a subject</option>
                <option value="Vaga">Job Vacancies</option>
                <option value="Sugestão">Suggestions</option>
                <option value="Trocar uma ideia">Chat</option>
              </select>
              <input
                type="text"
                placeholder="Enterprise"
                value={enterpriseName}
                onChange={event => setEnterpriseName(event.target.value)}
                required
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={event => setMessage(event.target.value)}

                required
              />
              <button type="submit">
                <S.Send>Send <FiSend size={16} /></S.Send>
              </button>
            </S.Form>
          </div> }
          </S.Wpp>
        </S.Box>
        <S.Footer>Copyright ©2021 All rights reserved.</S.Footer>
      </S.Main>
    </>
  )
}

export default PageContact
