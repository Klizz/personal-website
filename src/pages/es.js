import React, { Component } from "react";

class En extends Component {
  render() {
    return (
      <div>
        <section className="hero" id="top">
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
            <button className="scroll">
              <i class="large material-icons">contact_mail</i>
            </button>
          </a>
        </section>
        <div className="bottom-center">
          <a href="#about">
            <button className="scroll">
              <i class="large material-icons">expand_more</i>
            </button>
          </a>
        </div>

        <section className="fullscreen" id="about">
          <div>
            <h1 className="headline">Acerca de mí</h1>
            <p>
              Soy una aspirante a desarrolladora web con poca experiencia pero
              mucha motivación para aprender.
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
          <p>
            Estas son algunas de las tecnologías con las que he desarrollado
            proyectos:
          </p>
        </section>
      </div>
    );
  }
}

export default En;
