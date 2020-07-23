import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todos from "./components/Todos";
import Howtos from "./components/Howtos";
import Team from "./components/Team";
import Settings from "./components/Settings";
import logo from "./assets/monica-logo.svg";

function App() {
  return (
    <>
      <Router>
        <nav>
          <img src={logo} alt="monica logo" height="56px"></img>
          <ul>
            <li>
              <Link to="/">To Do</Link>
            </li>
            <li>
              <Link to="/howtos">How To</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/setting">Setting</Link>
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
    </>
  );
}

export default App;
