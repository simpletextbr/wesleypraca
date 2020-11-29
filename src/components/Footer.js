import React from "react";

import "./Footer.css";

import logo from "../assets/LOGO.svg";
import call from "../assets/call.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";

export default function Footer({ scroll }) {
  const contacts = [
    {
      id: 1,
      name: "Linkedin",
      picture: linkedin,
      link: "https://www.linkedin.com/in/wesley-pra%C3%A7a-908bb1a9/",
    },
    {
      id: 2,
      name: "Telefone",
      picture: call,
      link:
        "https://api.whatsapp.com/send?phone=553182480793&text=Ol%C3%A1%20Wesley%20estou%20entranto%20em%20contato%20pois%20recebemos%20seu%20curriculo%20e%20temos%20uma%20oportunidade%20para%20voc%C3%AA.",
    },
    {
      id: 3,
      name: "E-mail",
      picture: mail,
      link: "maito:wesley.praca@outlook.com.br",
    },
    {
      id: 4,
      name: "Github",
      picture: github,
      link: "https://github.com/simpletextbr",
    },
  ];

  return scroll ? (
    <footer>
      <p>
        2020@ TODOS OS DIREITOS RESERVADOS A
        <a
          href="https://www.linkedin.com/in/wesley-pra%C3%A7a-908bb1a9/"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <span> WESLEY PRAÇA</span>
        </a>
      </p>
      <a href="/">
        <img src={logo} alt="logo do site" />
      </a>
    </footer>
  ) : (
    <footer className="scroll">
      <div className="footerContacts">
        {contacts.map((contact) => (
          <div className="contact" key={contact.id}>
            <p className="cpmtactTitle">{contact.name}</p>
            <a href={contact.link} target="_blanck" rel="noopener noreferrer">
              <img src={contact.picture} alt={contact.name} />
            </a>
          </div>
        ))}
      </div>
      <div className="resume">
        <p className="resumeTitle">Download Resume</p>
        <h6>Baixar Curriculo</h6>
        <div className="downloads">
          <div className="pdf">
            <a
              href="https://drive.google.com/file/d/1hh6jDFwERBCYFbZFPWP61u1xcKg-W1Ht/view"
              target="_blanck"
              rel="noopener noreferrer"
            >
              <p>.PDF</p>
            </a>
          </div>
          <div className="docx">
            <a
              href="https://drive.google.com/file/d/1d7mibD2DqBWKZm40XvFaQ0eNooTAyO-j/view?usp=sharing"
              target="_blanck"
              rel="noopener noreferrer"
            >
              <p>.DOCX</p>
            </a>
          </div>
        </div>
      </div>
      <div className="Work">
        <h4>
          <span>OPEN</span> to Belo Horizonte
        </h4>
        <h4>and Metropolitan area jobs.</h4>
      </div>
      <div className="logo">
        <img src={logo} alt="logo do site" />
      </div>
    </footer>
  );
}
