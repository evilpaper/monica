import React from "react";
import logo from "../../assets/monica-logo-turquoise.svg";

export default function Landing(props) {
  function onButtonClick() {
    props.handleLoginClick();
  }

  return (
    <section className="landing-section">
      <img className="landing-logo" src={logo} alt="monica logo"></img>
      <h1 className="landing-header">
        <span>Fastest </span> way to live up to food safety rules
      </h1>
      <p className="landing-copy">
        Everything your food business need to comply to food safety regulations.
        Free 14 days trail. You are minutes away too be compliant.
      </p>
      <button onClick={onButtonClick} className="landing-cta">
        SHOW ME NOW
      </button>
    </section>
  );
}
