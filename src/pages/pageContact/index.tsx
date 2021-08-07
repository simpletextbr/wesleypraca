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

function pageContact ():JSX.Element{
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
      <S.main>
        <S.box>
          <S.text>
            <S.titleContact>Contact</S.titleContact>
            <p className="open">I`m <span>Open</span> for any suggestions and works in world wide or just have a chat.</p>
            <S.titleContacts>You can find me here!</S.titleContacts>
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
          </S.text>
          <S.wpp send={sendMessage}>
            {sendMessage === false &&
          <div className="inicial">
            <img src={Whatsapp} alt="logotipo do app Whatsapp" />
            <S.message onClick={() => setSendMessage(true)}>Send Message <FiSend size={16} /></S.message>
          </div> }
            {sendMessage === true &&
          <div className="contact">
            <S.close><FiX size={20} onClick={() => {
              setSendMessage(false)
              clearFields()
            }}/></S.close>
            <S.form onSubmit={sendWhatsAppMessage}>
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
                <S.send>Send <FiSend size={16} /></S.send>
              </button>
            </S.form>
          </div> }
          </S.wpp>
        </S.box>
        <S.footer>Copyright ©2021 All rights reserved.</S.footer>
      </S.main>
    </>
  )
}

export default pageContact
