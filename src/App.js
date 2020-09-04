import React from "react";

import "./App.css";
import phone from "./assets/call.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import mail from "./assets/mail.png";

function App() {
  return (
    <div className="App">
      <div className="content">
        <p className="paragraph">
          Hello{" "}
          <span role="img" aria-label="aceno com a mão">
            🖐
          </span>
          , My name is Wesley Praça and welcome to my presentation
        </p>
        <p>
          my friend Recruiter, okay i know that you may be in a little hurry, so
          you can download my resume below on site. if you still here, we go
          start the presentation.
        </p>
        <p className="title">My Fav Repos</p>
        <section className="data">
          <a href="https://github.com/simpletextbr/ToYourHouse">
            <div className="folder">
              <p className="repo_name">simpletextbr/ToYourHouse</p>
              <div className="detail">
                Projeto desenvolvido para solução de captação e recepção de
                pedidos via whatsapp para empresas com delivery
                <div className="languages">
                  <i>JavaScript</i>
                  <i>HTML</i>
                  <i>CSS</i>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/simpletextbr/Mediaindoor">
            <div className="folder">
              <p className="repo_name">simpletextbr/Mediaindoor</p>
              <div className="detail">
                Calculo de Instalação media indoor.(Entrevista php)
                <div className="languages">
                  <i>PHP</i>
                  <i>CSS</i>
                  <i>JavaScript</i>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/simpletextbr/DOE">
            <div className="folder">
              <p className="repo_name">simpletextbr/DOE</p>
              <div className="detail">
                Com{" "}
                <span role="img" aria-label="aceno com a mão">
                  ❤️
                </span>{" "}
                Wesley Praça Powered in @MARATONADEV3.0 @Rocketseat
                <div className="languages">
                  <i>CSS</i>
                  <i>HTML</i>
                  <i>JavaScript</i>
                </div>
              </div>
            </div>
          </a>
        </section>
        <div className="presentation">
          <p className="paragraph">
            Now as you can see, i appreciate too much JavaScript,
            Node.JS,React.JS
          </p>
          <p className="text_label">
            and React Native, Besides that i also like to venture in another
            types programming language like php, java, phyton and any others.
          </p>
          <p className="paragraph">
            Well, you too can see on my resume in my experiences that i am a
            good leader,
          </p>
          <p className="text_label">
            i have good english, like new challenges, i'm helpful. well, this is
            me if you liked can contact on my social medias, mail or my personal
            number, everything below for your convenience.
          </p>

          <p className="thanks">
            Thank you for following up here, have a beautiful day and a nice
            job!
            <span role="img" aria-label="aceno com a mão">
              😉
            </span>
          </p>
        </div>
        <div className="contacts_medias">
          <a href="https://api.whatsapp.com/send?phone=553182480793&text=Ol%C3%A1%20Wesley%20estou%20entranto%20em%20contato%20pois%20recebemos%20seu%20curriculo%20e%20temos%20uma%20oportunidade%20para%20voc%C3%AA.">
            <div className="contact">
              <img src={phone} alt="imagem de um telefone" />
              <p className="contact_detail">+55 31 9 8248-0793</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/wesley-pra%C3%A7a-908bb1a9/">
            <div className="contact">
              <img src={linkedin} alt="imagem do logo do linckedin" />
              <p className="contact_detail">Wesley Praça</p>
            </div>
          </a>
          <a href="mailto:wesley.praca@outlook.com.br">
            <div className="contact">
              <img src={mail} alt="imagem de uma carta de correio" />
              <p className="contact_detail">wesley.praca@outlook.com.br</p>
            </div>
          </a>
          <a href="https://github.com/simpletextbr">
            <div className="contact">
              <img src={github} alt="imagem do logo do github" />
              <p className="contact_detail">Simpletextbr</p>
            </div>
          </a>
        </div>
        <footer>
          <div className="donwload_room">
            <div className="resume">
              <p className="large">Download Resume</p>
              <p className="medium">Baixar Curriculo</p>
              <a href="https://drive.google.com/file/d/1d7mibD2DqBWKZm40XvFaQ0eNooTAyO-j/view?usp=sharing">
                <button type="button" className="button_docx">
                  .Docx
                </button>
              </a>
            </div>
            <p className="availability">
              <span>Open</span> to Belo Horizonte and Metropolitan area jobs.
            </p>
            <div className="resume">
              <p className="large">Download Resume</p>
              <p className="medium">Baixar Curriculo</p>
              <a href="https://drive.google.com/file/d/1hh6jDFwERBCYFbZFPWP61u1xcKg-W1Ht/view?usp=sharing">
                <button type="button" className="button_pdf">
                  .PDF
                </button>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
