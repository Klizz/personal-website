import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Es from "./pages/es";
import En from "./pages/en";
import Home from "./pages/home";
import Portafolio from "./pages/portafolio";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/es" component={Es} />
            <Route path="/es/portfolio" component={Portafolio} />
            <Route path="/en/portfolio" component={Portfolio} />
            <Route path="/en" component={En} />
            <Route path="" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
