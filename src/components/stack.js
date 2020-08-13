import React from 'react';
import Rating from '@material-ui/lab/Rating';
import BuildIcon from '@material-ui/icons/Build';
import CodeIcon from '@material-ui/icons/Code';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';

const Stack = (props) => {
    return(
        <div className="row">
          <div className="col s12 m4 centered-content">
          <CodeIcon 
            className="icon-color"
            fontSize="large"
            />
            <div className="space"></div>
            <span className="highlight-text">{props.column1}</span>
            <ul>
              <li>HTML5</li>
              <Rating name="read-only" value={4.5} precision={0.5} readOnly />
              <div className="space"></div>
              <li>CSS3</li>
              <Rating name="read-only" value={4} readOnly />
              <div className="space"></div>
              <li>Sass</li>
              <Rating name="read-only" value={3} readOnly />
              <div className="space"></div>
              <li>JavaScript</li>
              <Rating name="read-only" value={3.5} precision={0.5} readOnly />
              <div className="space"></div>
              <li>Python</li>
              <Rating name="read-only" value={2.5} precision={0.5} readOnly />
              <div className="space"></div>
              <li>Ruby</li>
              <Rating name="read-only" value={2} readOnly />
              <div className="space"></div>
            </ul>
          </div>
          <div className="col s12 m4 centered-content">
          <LaptopChromebookIcon 
            className="icon-color"
            fontSize="large"
            />
            <div className="space"></div>
            <span className="highlight-text">{props.column2}</span>
            <ul>
              <li>React.js</li>
              <Rating name="read-only" value={3} readOnly />
              <div className="space"></div>
              <li>NodeJS</li>
              <Rating name="read-only" value={2} readOnly />
              <div className="space"></div>
              <li>Material UI</li>
              <Rating name="read-only" value={2} readOnly />
              <div className="space"></div>
              <li>Bootstrap</li>
              <Rating name="read-only" value={3} readOnly />
              <div className="space"></div>
              <li>MaterializeCSS</li>
              <Rating name="read-only" value={4} readOnly />
              <div className="space"></div>
            </ul>
          </div>
          <div className="col s12 m4 centered-content">
            <BuildIcon 
            className="icon-color"
            fontSize="large"
            />
            <div className="space"></div>
            <span className="highlight-text">{props.column3}</span>
            <ul>
              <li>Git</li>
              <Rating name="read-only" value={2.5} precision={0.5} readOnly />
              <div className="space"></div>
              <li>GitHub</li>
              <Rating name="read-only" value={2.5} precision={0.5} readOnly />
              <div className="space"></div>
              <li>Visual Studio Code</li>
              <Rating name="read-only" value={3} readOnly />
              <div className="space"></div>
              <li>Terminal de Linux</li>
              <Rating name="read-only" value={4} readOnly />
              <div className="space"></div>
            </ul>
          </div>
          </div>
    )
}

export default Stack;