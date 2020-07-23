import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Todos from "../Todos";
import Howtos from "../Howtos";
import Team from "../Team";
import Settings from "../Settings";
import Account from "../Account";
import logo from "../../assets/monica-logo.svg";

function Navigation() {
  return (
    <Router>
      <nav className="navigation-container">
        <ul className="navigation-list">
          <li className="navigation-list__item">
            <NavLink
              exact={true}
              activeClassName="is-active"
              className="naviagtion-link"
              to="/"
            >
              <img
                className="navigation-logo"
                src={logo}
                alt="monica logo"
                height="24px"
              ></img>
            </NavLink>
          </li>
          <li className="navigation-list__item">
            <NavLink
              exact={true}
              activeClassName="is-active"
              className="naviagtion-link"
              to="/"
            >
              To Do
            </NavLink>
          </li>
          <li className="navigation-list__item">
            <NavLink
              activeClassName="is-active"
              className="naviagtion-link"
              to="/howtos"
            >
              How To
            </NavLink>
          </li>
          <li className="navigation-list__item">
            <NavLink
              activeClassName="is-active"
              className="naviagtion-link"
              to="/team"
            >
              Team
            </NavLink>
          </li>
          <li className="navigation-list__item">
            <NavLink
              activeClassName="is-active"
              className="naviagtion-link"
              to="/settings"
            >
              Settings
            </NavLink>
          </li>
        </ul>
        <ul className="">
          <li className="navigation-list__item navigation-list__item--account">
            <NavLink
              activeClassName="is-active"
              className="naviagtion-link"
              to="/account"
            >
              Sign In
            </NavLink>
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
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/">
          <Todos />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
