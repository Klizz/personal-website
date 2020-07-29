import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

class En extends Component {
  render() {
    return (
      <div>
      <div>
        <section className="fullscreen hero" id="top">
          <h1>Hello, my name is Karen</h1>
          <h3>Im a Web Developer Jr.</h3>
          <a href="mailto:klizzy@hotmail.es"><Button variant="outlined">Contacto</Button></a>
          <a href="#about"><KeyboardArrowDownIcon /></a>
        </section>
        </div>
        <div className="centered-box content">
        <div className="content">
        <section className="fullscreen" id="about">
          <div>
            <h1>Hola, soy Karen Ibarra</h1>
            <p>
              ladklsakd;alk
            </p>
          </div>
          </section>
        </div>
        <section className="fullscreen" id="stack">
        <div className="content">
          <h1>Otra seccion</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            iaculis facilisis erat vitae blandit. Donec sed pharetra lectus, in
            ultrices felis. Duis justo nunc, egestas non nisi dictum, facilisis
            interdum quam. Nulla porta mattis erat. In elementum sagittis velit.
            Praesent tincidunt pulvinar mollis.
          </p>
        </div>
        </section>
      </div>
      </div>
    );
  }
}

export default En;
