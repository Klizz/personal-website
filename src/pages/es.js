import React, { Component } from "react";
import Contacto from '../components/contacto';
import BackToTop from '../components/BackToTop';
import Stack from '../components/Stack';
import Hero from '../components/Hero';
import About from '../components/About'
import '../../src/style.css';


class Es extends Component {
  render() {
    return (
      <div className="snap-container">
        <section className="hero" id="top">
          <Hero
          headline1="Hola, soy Karen"
          headline2="Soy Web Developer Jr."
          navtitle="Navegación"
          link="/es/portfolio"
          nav1="Sobre mi"
          nav2="Tecnologías"
          nav3="Contacto"
          nav4="Portafolio"
          nav5="Visitar sitio en inglés"
          lang="/en"
           />          
        </section>

        <div className="bottom-center">
          <a href="#about">
            <button className="scroll">
              <br />
              <i class="large material-icons">expand_more</i>
            </button>
          </a>
        </div>

        <section id="about" className="container">
          <About
          title="Acerca de mí"
          info="Mi nombre es Karen Ibarra y mi meta es convertirme en desarrolladora web.
              Actualmente resido en la ciudad de Monterrey, Nuevo León y tengo
              interés en trabajar en empresas de esa ciudad o de manera remota
              en cualquier parte del mundo. Mi pasión está principalmente en el
              desarrollo FrontEnd, pero tampoco temo desarrollar BackEnd. 
              Soy una persona autodidacta y amante de la tecnología. Empecé practicando con 
              HTML y CSS desde los 13 años y uso Linux desde 2011.
              Actualmente me desempeño como profesora de primaria, pero tengo un gran interés
              en cambiar de carrera."
           />
        </section>
        <div className="space"></div>
        <section className="container centered-content snap" id="stack">
          <h1 className="headline">Tecnologías</h1>
          <div className="space"></div>
          <Stack
          column1="Lenguajes:"
          column2="Frameworks y librerías:"
          column3="Herramientas"
           />
        </section>
        <div className="space"></div>
        <div className="space"></div>
        <section className="contact-section" id="contact">
          <Contacto
          title="Contáctame"
          techused="Este sitio fue hecho con:"
          design="Diseñado por: Karen Ibarra"
           />
        </section>
        <BackToTop />
      </div>
    );
  }
}

export default Es;
