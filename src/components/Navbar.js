import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";

const Navbar = () => {
  return (
    <nav>
      <div class="nav-wrapper grey darken-3">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/">
              <LanguageIcon />
            </a>
          </li>
          <li>
            <a href="/es">
              <HomeIcon />
            </a>
          </li>
          <li>
            <a href="#about">
              <WorkIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
