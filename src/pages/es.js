import React, { Component } from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';

class Es extends Component {
  render() {
    return (
      <div>
        <section className="hero" id="top">

          <Typography className="animate__animated animate__fadeInRight" variant="h1" component="h2" gutterBottom>
          Hola, mi nombre es Karen
          </Typography>
          <Typography className="animate__animated animate__fadeInRight animate__delay-2s" variant="h3" component="h2" gutterBottom>
          Soy Web Developer Jr.
          </Typography>
          <a
            href="mailto:klizzy@hotmail.es"
            className="animate__animated animate__fadeIn animate__delay-4s"
          ></a>
          <a href="mailto:klizzy@hotmail.es">
          <MailIcon 
          className="icon"
          fontSize="large"
          />
          </a>
          <a href="https://github.com/Klizz">
          <GitHubIcon 
          className="icon"
          fontSize="large"
          />
          </a>
          <a href="https://www.linkedin.com/in/karen-ibarra-662a94111/">
          <LinkedInIcon 
          className="icon"
          fontSize="large"
          />
          </a>
        </section>

        <div className="bottom-center">
          <a href="#about">
            <button className="scroll">
              Ver mas
              <br />
              <i class="large material-icons">expand_more</i>
            </button>
          </a>
        </div>

        <section className="fullscreen" id="about">
          <div className="row">
          <div className="col s12 m8 info">
            <h1 className="headline">Acerca de mí</h1>
            <p className="flow-text">
              Mi meta es convertirme en desarrolladora web.
              <br />
              Actualmente resido en la ciudad de Monterrey, Nuevo León y tengo
              interés en trabajar en empresas de esa ciudad o de manera remota
              en cualquier parte del mundo. Mi pasión está principalmente en el
              desarrollo FrontEnd, pero tampoco temo desarrollar BackEnd. <br />
            </p>
          </div>
          <div className="col s12 m4">
          <img
              src="https://www.pinclipart.com/picdir/big/35-359998_transparent-background-pusheen-gif-clipart.png"
              alt="pusheen"
              className="responsive-img"
            />
          </div>
          </div>
        </section>

        <section className="fullscreen" id="stack">
          <h1 className="headline">Tecnologías</h1>
          <p className="flow-text">
            Estas son algunas de las tecnologías y lenguajes con las que he desarrollado
            proyectos: <br />
            <img src="./logos/html5.png" alt="html5" className="logos" />
            <img src="./logos/css3.png" alt="css3" className="logos" />
            <img
              src="./logos/javascript.png"
              alt="javascript"
              className="logos"
            />
            <img src="./logos/python.png" alt="python" className="logos" />
            <br />
            <img src="./logos/reactjs.png" alt="reactjs" className="logos" />
            <img src="./logos/nodejs.png" alt="nodejs" className="logos" />
          </p>
        </section>
      </div>
    );
  }
}

export default Es;
