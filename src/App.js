import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Es from "./pages/es";
import En from "./pages/en";
import Home from "./pages/home";
/* import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css"; */


function App() {
  return (
    <div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/es" component={Es} />
            <Route path="/en" component={En} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
