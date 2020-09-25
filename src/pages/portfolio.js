import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import Button from "@material-ui/core/Button";


const Portfolio = () => {
  return (
    <div className="container center-align grey-bg">
      <h1 className="headline">Portfolio</h1>
      <h4>Some examples of the projects I've made</h4>
      <a href="/en">
        <Button color="secondary" variant="contained" size="large">
          Main site
        </Button>
      </a>
      <div className="space"></div>
      <div className="row">
        <PortfolioCard
          title="Personal website"
          text="Source code for the current webpage"
          link="https://github.com/Klizz/personal-website"
          variant="disabled"
        />
        <PortfolioCard
          title="React Movie"
          text="A website showing the newest movies and some info about them"
          link="https://github.com/Klizz/react-movie"
          demo="https://vibrant-turing-473d00.netlify.app/"
        />
        <PortfolioCard
          title="Random Meal Generator"
          text="Generates a random recipe from a JSON file, no backend or database"
          link="https://github.com/Klizz/random-meal-generator"
          variant="disabled"
        />
        <PortfolioCard
          title="Shopping cart V1"
          text="First version of a shopping cart"
          link="https://github.com/Klizz/shopping-cart"
          variant="disabled"
        />
        <PortfolioCard
          title="Cat clock"
          text="A website showing the current time, a greeting and a picture of a cat"
          link="https://github.com/Klizz/catclock-react"
          demo="https://codepen.io/karen-ibarra/pen/oNXvPoe"
        />
        <PortfolioCard
          title="Facebook wall"
          text="Facebook wall clone. Websockets practice"
          link="https://github.com/Klizz/fb-wall"
          variant="disabled"
        />
        <PortfolioCard
          title="Joystick Joy"
          text="A landing page for a retro videogame store. My very first bootcamp project"
          link="https://github.com/Klizz/fb-wall"
          demo="https://codepen.io/karen-ibarra/pen/GRZJdpr"
        />
        <PortfolioCard
          title="UberEats clone"
          text="A very simple UberEats backend clone"
          link="https://github.com/Klizz/food-api"
          variant="disabled"
        />
      </div>
    </div>
  );
};

export default Portfolio;
