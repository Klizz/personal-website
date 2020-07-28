import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

class Home extends Component {
  render() {
    return (
      <div className="centered-box centered-content content">
        <h1>Choose your language</h1>
        <a href="/es">
          <img
            src="https://image.flaticon.com/icons/svg/197/197397.svg"
            alt="Mexico"
            height="250px"
            className="right-space centered-content"
          />
        </a>
        <a href="/en">
          <img
            src="https://image.flaticon.com/icons/svg/323/323310.svg"
            alt="US"
            height="250px"
          />
        </a>
      </div>
    );
  }
}

export default Home;
