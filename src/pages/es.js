import React, { Component } from "react";

class En extends Component {
  render() {
    return (
      <div>
        <section className="hero" id="top">
          <div className="col s7 push-s5">
          <h1 className="animate__animated animate__fadeInRight">
            Hola, mi nombre es Karen
          </h1>
          <h3 className="animate__animated animate__fadeInRight animate__delay-2s">
            Soy Web Developer Jr.
          </h3>
          <a
            href="mailto:klizzy@hotmail.es"
            className="animate__animated animate__fadeIn animate__delay-4s"
          >
          </a>
          </div>
          <div className="col s5 pull-s7">
          <a href="mailto:klizzy@hotmail.es">
            <img src="./icons/correo.svg" alt="mail" className="icon" />
          </a>
          <a href="https://github.com/Klizz">
            <img src="./icons/imagen-de-github.svg" alt="github" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/karen-ibarra-662a94111/">
            <img src="./icons/linkedin.svg" alt="linkedin" className="icon" />
          </a>
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
          <div>
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
          <a href="#stack">
            <button className="scroll">
              <i class="large material-icons">expand_more</i>
            </button>
          </a>
        </section>

        <section className="fullscreen" id="stack">
          <h1 className="headline">Tecnologías</h1>
          <p className="flow-text">
            Estas son algunas de las tecnologías con las que he desarrollado
            proyectos: <br />
            <img src="./logos/html5.png" alt="html5" className="logos" />
            <img src="./logos/css3.png" alt="css3" className="logos" />
            <img src="./logos/javascript.png" alt="javascript" className="logos" />
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

export default En;
