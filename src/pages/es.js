import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import BuildIcon from '@material-ui/icons/Build';
import CodeIcon from '@material-ui/icons/Code';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import Contacto from '../components/contacto';


class Es extends Component {
  render() {
    return (
      <div>
        <section className="hero" id="top">

          <div className="row">
          <div className="col s12 m8">
          <Typography className="animate__animated animate__fadeInRight" variant="h1" component="h2" gutterBottom>
          Hola, mi nombre es Karen
          </Typography>
          <Typography className="animate__animated animate__fadeInRight animate__delay-2s" variant="h3" component="h2" gutterBottom>
          Soy Web Developer Jr.
          </Typography>
          </div>

          <div className="col s12 m4 animate__animated animate__fadeIn animate__delay-3s">
            <h4>Navegación</h4>
            <ul>
              <a href="#about" className="nav"><li>Sobre mí</li></a>
              <a href="#stack" className="nav"><li>Tecnologías</li></a>
              <a href="#contact" className="nav"><li>Contáctame</li></a>
            </ul>
          </div>
          </div>
          
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
        <div className="space"></div>
        <section className="container centered-content" id="stack">
          <h1 className="headline">Tecnologías</h1>
          <div className="space"></div>
          <div className="row">
          <div className="col s12 m4 centered-content">
          <CodeIcon 
            className="icon-color"
            fontSize="large"
            />
            <div className="space"></div>
            <span className="highlight-text">Lenguajes:</span>
            <ul>
              <li>HTML5</li>
              <Rating name="read-only" value={4.5} precision={0.5} readOnly />
              <div className="space"></div>
              <li>CSS3</li>
              <Rating name="read-only" value={4} readOnly />
              <div className="space"></div>
              <li>Sass</li>
              <Rating name="read-only" value={3.5} precision={0.5} readOnly />
              <div className="space"></div>
              <li>JavaScript</li>
              <Rating name="read-only" value={4} readOnly />
              <div className="space"></div>
              <li>Python</li>
              <Rating name="read-only" value={2.5} precision={0.5} readOnly />
              <div className="space"></div>
              <li>Ruby</li>
              <Rating name="read-only" value={2} readOnly />
              <div className="space"></div>
            </ul>
          </div>
          <div className="col s12 m4 centered-content">
          <LaptopChromebookIcon 
            className="icon-color"
            fontSize="large"
            />
            <div className="space"></div>
            <span className="highlight-text">Frameworks y librerías:</span>
            <ul>
              <li>React.js</li>
              <Rating name="read-only" value={3} readOnly />
              <div className="space"></div>
              <li>NodeJS</li>
              <Rating name="read-only" value={2.5} precision={0.5} readOnly />
              <div className="space"></div>
              <li>Material UI</li>
              <Rating name="read-only" value={2} readOnly />
              <div className="space"></div>
              <li>Bootstrap</li>
              <Rating name="read-only" value={3} readOnly />
              <div className="space"></div>
              <li>MaterializeCSS</li>
              <Rating name="read-only" value={4} readOnly />
              <div className="space"></div>
            </ul>
          </div>
          <div className="col s12 m4 centered-content">
            <BuildIcon 
            className="icon-color"
            fontSize="large"
            />
            <div className="space"></div>
            <span className="highlight-text">Herramientas:</span>
            <ul>
              <li>Git</li>
              <Rating name="read-only" value={3} readOnly />
              <div className="space"></div>
              <li>GitHub</li>
              <Rating name="read-only" value={2} readOnly />
              <div className="space"></div>
              <li>Visual Studio Code</li>
              <Rating name="read-only" value={3} readOnly />
              <div className="space"></div>
              <li>Terminal de Linux</li>
              <Rating name="read-only" value={4} readOnly />
              <div className="space"></div>
            </ul>
          </div>
          </div>
        </section>
        <div className="space"></div>
        <section className="contact-section" id="contact">
          <Contacto />
        </section>
      </div>
    );
  }
}

export default Es;
