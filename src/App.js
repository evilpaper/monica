import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "pages/Landing";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      {!isLoggedIn && <Landing handleLoginClick={handleLoginClick} />}
      {isLoggedIn && <Navigation />}
    </>
  );
}

export default App;
