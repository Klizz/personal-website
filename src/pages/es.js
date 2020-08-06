import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

class En extends Component {
  render() {
    return (
      <div>
        <section className="hero" id="top">
          <h1>Hola, mi nombre Karen</h1>
          <h3>Soy Web Developer Jr.</h3>
          <a href="mailto:klizzy@hotmail.es">
            <Button variant="outlined">Contacto</Button>
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
            <h1>Hola, soy Karen Ibarra</h1>
            <p>ladklsakd;alk</p>
          </div>
          <a href="#stack">
            <button className="scroll">  
              <i class="large material-icons">expand_more</i>
            </button>
          </a>
        </section>

        <section className="fullscreen" id="stack">
          <h1>Otra seccion</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            iaculis facilisis erat vitae blandit. Donec sed pharetra lectus, in
            ultrices felis. Duis justo nunc, egestas non nisi dictum, facilisis
            interdum quam. Nulla porta mattis erat. In elementum sagittis velit.
            Praesent tincidunt pulvinar mollis.
          </p>
        </section>
      </div>
    );
  }
}

export default En;
