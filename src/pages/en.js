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
          headline1="Hello, I'm Karen"
          headline2="I'm a Jr. Web Developer"
          navtitle="Navigation"
          link="/en/portfolio"
          nav1="About me"
          nav2="Technologies"
          nav3="Contact"
          nav4="Portfolio"
          nav5="Visit Spanish website"
          lang="/es"
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
          title="About me"
          info="My name is Karen Ibarra and my goal is to become a web developer. 
          I am currently living in the city of Monterrey, Mexico and I'm interested on working for
          businesses in my current city or remotely in any part of the world.
          My passion is mainly in frontend, but I'm not afraid of developing backend. 
          I'm a self-teaching person and a tech lover. I started coding with
          HTML since I was 13 years old and I'm a Linux user since 2011. I'm still not the greatest
          programmer in the world, but I'm always doing my best to improve my coding skills"
           />
        </section>
        <div className="space"></div>
        <section className="container centered-content snap" id="stack">
          <h1 className="headline">Technologies</h1>
          <div className="space"></div>
          <Stack
          column1="Languages"
          column2="Frameworks and libraries:"
          column3="Tools"
           />
        </section>
        <div className="space"></div>
        <div className="space"></div>
        <section className="contact-section" id="contact">
          <Contacto
          title="Contact me"
          techused="This website was made with:"
          design="Designed by: Karen Ibarra"
           />
        </section>
        <BackToTop />
      </div>
    );
  }
}

export default Es;
