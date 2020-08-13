import React from 'react';

const About = (props) => {
    return(
        <div className="row fullscreen">
            <div className="space"></div>
          <div className="col s12 m8">
            <h1 className="headline">{props.title}</h1>
            <p className="flow-text">
              {props.info}
            </p>
          </div>
          <div className="col s12 m4">
          <img
              src="https://www.pinclipart.com/picdir/big/35-359998_transparent-background-pusheen-gif-clipart.png"
              alt="pusheen"
              className="responsive-img"
            />
          </div>
          </div>
    )
}

export default About;