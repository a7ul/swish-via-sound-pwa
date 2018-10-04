import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";
import { Result } from "./pages/Result";
import Demo from "./pages/demo";

export const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/payment" component={Payment} />
      <Route path="/result" component={Result} />
      <Route path="/demo" component={Demo} />
    </div>
  </Router>
);
