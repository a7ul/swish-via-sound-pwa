import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";
import { Result } from "./pages/Result";

export const App = () => (
  <Router>
    <div>
      {/* <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
      </ul>

      <hr /> */}

      <Route exact path="/" component={Home} />
      <Route path="/payment" component={Payment} />
      <Route path="/result" component={Result} />
    </div>
  </Router>
);
