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
  FiSettings,
} from "react-icons/fi";
import Todos from "../Todos";
import Howtos from "../Howtos";
import Team from "../Team";
import Settings from "../Settings";
import Account from "../Account";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Landing from "../Landing";

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
                <span className="mobile-navigation__item--label">To-do's</span>
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
                <span className="mobile-navigation__item--label">How-to's</span>
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
                to="/settings"
              >
                <FiSettings className="mobile-navigation__item--icon" />
                <span className="mobile-navigation__item--label">Settings</span>
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
            <li className="navigation-list__item">
              <NavLink
                exact={true}
                activeClassName="is-active"
                className="naviagtion-link"
                to="/"
              >
                <div className="navigation__item--icon-container">
                  <FiCheckSquare className="navigation__item--icon" />
                </div>
                To-do's
              </NavLink>
            </li>
            <li className="navigation-list__item">
              <NavLink
                activeClassName="is-active"
                className="naviagtion-link"
                to="/howtos"
              >
                <div className="navigation__item--icon-container">
                  <FiHelpCircle className="navigation__item--icon" />
                </div>
                How-to's
              </NavLink>
            </li>
            <li className="navigation-list__item">
              <NavLink
                activeClassName="is-active"
                className="naviagtion-link"
                to="/team"
              >
                <div className="navigation__item--icon-container">
                  <FiUsers className="navigation__item--icon" />
                </div>
                Team
              </NavLink>
            </li>
          </ul>
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <NavLink
                activeClassName="is-active"
                className="naviagtion-link"
                to="/settings"
              >
                <div className="navigation__item--icon-container">
                  <FiSettings className="navigation__item--icon" />
                </div>
                Settings
              </NavLink>
            </li>
            <li className="navigation-list__item navigation-list__item--account">
              <NavLink
                activeClassName="is-active"
                className="naviagtion-link"
                to="/account"
              >
                Account
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
        <Route path="/settings">
          <Settings />
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
