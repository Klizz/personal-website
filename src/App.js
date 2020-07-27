import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Es from "./pages/es";
import En from "./pages/en";
import Home from "./pages/home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
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
