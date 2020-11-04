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
        Pass inspections <br/><span> every</span> time 
      </h1>
      <p className="landing-copy">
        Set up a complete food safety managment system for your cater business setup in 60 seconds.
        <br />
        Free 14 days trail, no credit card needed.
      </p>
      <button onClick={onButtonClick} className="landing-cta">
        TRY MONICA NOW
      </button>
    </article>
  );
}
