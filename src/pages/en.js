import React, { Component } from "react";

class En extends Component {
    render() {
        return(
            <div>
      <section className="hero">
        <nav>
          <div class="topnav">
            <a class="active" href="#home">
              Home
            </a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </nav>

        <div className="hero-inner">
          <h1 className="main-line animate__animated animate__fadeIn">
            Welcome to my website
          </h1>
          <h2 className="main-line animate__animated animate__fadeIn">
            My name is Karen
          </h2>
          <button className="btn animate__animated animate__fadeIn">
            Click
          </button>
        </div>
      </section>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              iaculis facilisis erat vitae blandit. Donec sed pharetra lectus,
              in ultrices felis. Duis justo nunc, egestas non nisi dictum,
              facilisis interdum quam. Nulla porta mattis erat. In elementum
              sagittis velit. Praesent tincidunt pulvinar mollis.
            </p>
          </div>
        </div>
        <div className="content">
          <h1>Otra seccion</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              iaculis facilisis erat vitae blandit. Donec sed pharetra lectus,
              in ultrices felis. Duis justo nunc, egestas non nisi dictum,
              facilisis interdum quam. Nulla porta mattis erat. In elementum
              sagittis velit. Praesent tincidunt pulvinar mollis.
            </p>
        </div>
      </div>
        );
    }
}

export default En;