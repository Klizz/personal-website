import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Es from "./pages/es";
import Portafolio from "./pages/portafolio";
import Contacto from "./pages/contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Es} />
            <Route path="/portfolio" component={Portafolio} />
            <Route path="/contact" component={Contacto} />
            <Route path="" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
