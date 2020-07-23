import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todos from "../Todos";
import Howtos from "../Howtos";
import Team from "../Team";
import Settings from "../Settings";
import logo from "../../assets/monica-logo.svg";

function Navigation() {
  return (
    <Router>
      <nav className="navigation-container">
        <img
          className="navigation-logo"
          src={logo}
          alt="monica logo"
          height="24px"
        ></img>
        <ul className="navigation-list">
          <li>
            <Link className="naviagtion-link" to="/">To Do</Link>
          </li>
          <li>
            <Link className="naviagtion-link" to="/howtos">How To</Link>
          </li>
          <li>
            <Link className="naviagtion-link" to="/team">Team</Link>
          </li>
          <li>
            <Link className="naviagtion-link" to="/settings">Setting</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/howtos">
          <Howtos />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/">
          <Todos />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
