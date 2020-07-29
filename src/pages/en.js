import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

class En extends Component {
  render() {
    return (
      <div>
      <div>
        <section className="fullscreen hero">
          <h1>Hello, my name is Karen</h1>
          <h3>Im a Web Developer Jr.</h3>
          <a href="mailto:klizzy@hotmail.es"><Button variant="outlined">Contacto</Button></a>
          <KeyboardArrowDownIcon />
        </section>
        </div>
        <div className="centered-box content">
        <div className="content">
          <div className="left">
            <img
              src="https://scontent.fntr3-1.fna.fbcdn.net/v/t1.0-1/p200x200/101325137_10222923222487440_2205365363175063552_n.jpg?_nc_cat=106&_nc_sid=7206a8&_nc_eui2=AeE4EEgqbTztMpPiNkT72Cz38X-fRfaCBoPxf59F9oIGg8TrKq7oWBp16di_wNGMvTc&_nc_ohc=1F-TzO9UZVYAX8q05jw&_nc_ht=scontent.fntr3-1.fna&_nc_tp=6&oh=4631524b766dfa65da87c346992c81b0&oe=5F41E3F2"
              alt="pic"
            />
          </div>
          <div className="right">
            <h1>Hola, soy Karen Ibarra</h1>
            <p>
              ladklsakd;alk
            </p>
          </div>
        </div>
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
      </div>
      </div>
    );
  }
}

export default En;
