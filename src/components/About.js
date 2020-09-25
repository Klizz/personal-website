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
              src="images/137904_xVLFcpIH.png"
              alt="avatar"
              className="responsive-img"
            />
          </div>
          </div>
    )
}

export default About;