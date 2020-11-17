import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "../../assets/monica-logo.svg";
import {
  FiCheckSquare,
  FiHelpCircle,
  FiUsers,
  FiHome,
  FiUser,
} from "react-icons/fi";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Todos from "pages/Todos";
import Howtos from "pages/Howtos";
import Team from "pages/Team";
import Unit from "pages/Unit";
import Account from "pages/Account";

import Landing from "pages/Landing";

import "./styles.css"

function Navigation() {
  const [windowDimension, setWindowDimension] = useState(window.innerWidth);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  return (
    <Router>
      {isMobile ? (
        <nav className="mobile-navigation-container">
          <ul className="mobile-navigation-list">
            <li className="mobile-navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="mobile-navigation-link"
                to="/"
              >
                <FiCheckSquare className="mobile-navigation__item--icon" />
                <span className="mobile-navigation__item--label">To-do</span>
              </NavLink>
            </li>
            <li className="mobile-navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="mobile-navigation-link"
                to="/howtos"
              >
                <FiHelpCircle className="mobile-navigation__item--icon" />
                <span className="mobile-navigation__item--label">How-to</span>
              </NavLink>
            </li>
            <li className="mobile-navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="mobile-navigation-link"
                to="/team"
              >
                <FiUsers className="mobile-navigation__item--icon" />
                <span className="mobile-navigation__item--label">Team</span>
              </NavLink>
            </li>
            <li className="mobile-navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="mobile-navigation-link"
                to="/unit"
              >
                <FiHome className="mobile-navigation__item--icon" />
                <span className="mobile-navigation__item--label">Unit</span>
              </NavLink>
            </li>
            <li className="mobile-navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="mobile-navigation-link"
                to="/Account"
              >
                <FiUser className="mobile-navigation__item--icon" />
                <span className="mobile-navigation__item--label">You</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
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
                ></img>
              </NavLink>
            </li>
          </ul>
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="naviagtion-link"
                to="/"
              >
                To-do's
                <div className="navigation-link__active-marker"></div>
              </NavLink>
            </li>
            <li className="navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="naviagtion-link"
                to="/howtos"
              >
                How-to's
                <div className="navigation-link__active-marker"></div>
              </NavLink>
            </li>
            <li className="navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="naviagtion-link"
                to="/team"
              >
                Team
                <div className="navigation-link__active-marker"></div>
              </NavLink>
            </li>
            <li className="navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="naviagtion-link"
                to="/unit"
              >
                Businesss
                <div className="navigation-link__active-marker"></div>
              </NavLink>
            </li>
          </ul>
          <ul className="navigation-list">
            <li className="navigation-list__item navigation-list__item--account">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="naviagtion-link"
                to="/account"
              >
                Create account
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      <Switch>
        <Route path="/howtos">
          <Howtos />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/unit">
          <Unit />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/">
          <Todos />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
