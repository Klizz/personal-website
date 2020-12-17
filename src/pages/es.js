import React, { Component } from "react";
import Particles from 'react-particles-js';
import '../../src/style.css';

class Es extends Component {
  render() {
    return (
      <div className="background-main">
<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 60,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.04
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.5
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.9
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
	<div class="page-info">
      <h1 class="display-1">Karen Ibarra</h1>
      <h4>Web developer</h4>
      <a href="portfolio.html"><button type="button" class="btn btn-outline-light btn-lg">Portafolio</button></a>
      <a href="contact.html"><button type="button" class="btn btn-outline-light btn-lg">Contacto</button></a>
    </div>
      </div>
    );
  }
}

export default Es;

