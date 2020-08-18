import React from "react";
import logo from "../../assets/monica-logo-turquoise.svg";

export default function Landing(props) {
  function onButtonClick() {
    props.handleLoginClick();
  }

  return (
    <article className="landing-section">
      <img className="landing-logo" src={logo} alt="monica logo"></img>
      <h1 className="landing-header">
        <span>Fastest </span> way to comply
        <br />
        to food safety requirements
      </h1>
      <p className="landing-copy">
        Pass inspections every time. Automatically onboard your team and secure
        food safety with minimal effort.
        <br />
        Free 14 days trail. You are minutes away from nailing next audit.
      </p>
      <button onClick={onButtonClick} className="landing-cta">
        TRY MONICA NOW
      </button>
    </article>
  );
}
