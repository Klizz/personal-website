import React from 'react';
import Typography from '@material-ui/core/Typography';

const Hero = (props) => {
    return(
        <div className="row">
          <div className="col s12 m9">
          <Typography className="animate__animated animate__fadeInRight bold" variant="h1" component="h2" gutterBottom>
          {props.headline1}
          </Typography>
          <Typography className="animate__animated animate__fadeInRight animate__delay-2s" variant="h3" component="h2" gutterBottom>
          {props.headline2}
          </Typography>
          </div>

          <div className="col s12 m3 animate__animated animate__fadeIn animate__delay-3s hide-on-small-only">
            <h4>{props.navtitle}</h4>
            <ul>
              <a href="#about" className="nav"><li>{props.nav1}</li></a>
              <a href="#stack" className="nav"><li>{props.nav2}</li></a>
              <a href="#contact" className="nav"><li>{props.nav3}</li></a>
              <a href="/es/portfolio" className="nav"><li>{props.nav4}</li></a>
            </ul>
          </div>
          </div>
    )
}

export default Hero;