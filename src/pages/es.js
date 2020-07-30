import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

class En extends Component {
  render() {
    return (
      <div>
        <section className="hero" id="top">
          <h1>Hello, my name is Karen</h1>
          <h3>Im a Web Developer Jr.</h3>
          <a href="mailto:klizzy@hotmail.es">
            <Button variant="outlined">Contacto</Button>
          </a>
        </section>
        <div className="bottom-center">
          <a href="#about" class="btn-floating btn-large pulse">
            <KeyboardArrowDownIcon />
          </a>
        </div>

        <section className="fullscreen" id="about">
          <div>
            <h1>Hola, soy Karen Ibarra</h1>
            <p>ladklsakd;alk</p>
          </div>
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
