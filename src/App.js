import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn && <Landing />}
      {isLoggedIn && <Navigation />}
    </>
  );
}

export default App;
