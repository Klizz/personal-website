import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import Button from "@material-ui/core/Button";

const Portafolio = () => {
  return (
    <div className="container center-align grey-bg">
      <h1 className="headline">Portafolio</h1>
      <h4>Algunos ejemplos de proyectos que he realizado</h4>
      <a href="/es">
        <Button color="secondary" variant="contained" size="large">
          Página principal
        </Button>
      </a>
      <div className="space"></div>
      <div className="row">
        <PortfolioCard
          title="Sitio web personal"
          text="Código de la página actual"
          link="https://github.com/Klizz/personal-website"
          variant="disabled"
        />
        <PortfolioCard
          title="React Movie"
          text="Proyecto conectado una API de internet para mostrar una base de datos de películas"
          link="https://github.com/Klizz/react-movie"
          variant="disabled"
        />
        <PortfolioCard
          title="Random Meal Generator"
          text="Genera una receta al azar a partir de la información de un archivo JSON"
          link="https://github.com/Klizz/random-meal-generator"
          variant="disabled"
        />
        <PortfolioCard
          title="Carrito de compras V1"
          text="Primera versión de un carrito de compras"
          link="https://github.com/Klizz/shopping-cart"
          variant="disabled"
        />
        <PortfolioCard
          title="Reloj de gatos con React"
          text="Reloj que muestra una imagen y un saludo dependiendo de la hora del día"
          link="https://github.com/Klizz/catclock-react"
          demo="https://codepen.io/karen-ibarra/pen/oNXvPoe"
        />
        <PortfolioCard
          title="Muro de Facebook"
          text="Clon de un muro de Facebook que muestra una publicación de manera inmediata"
          link="https://github.com/Klizz/fb-wall"
          variant="disabled"
        />
        <PortfolioCard
          title="Joystick Joy"
          text="Landing page sencilla de una página de venta de juegos vintage, primer proyecto del curso de CeroUno"
          link="https://github.com/Klizz/fb-wall"
          demo="https://codepen.io/karen-ibarra/pen/GRZJdpr"
        />
        <PortfolioCard
          title="Clon UberEats"
          text="Clon simple del backend de la aplicación de UberEats"
          link="https://github.com/Klizz/food-api"
          variant="disabled"
        />
      </div>
    </div>
  );
};

export default Portafolio;
