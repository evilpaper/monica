import React from "react";
import logo from "../../assets/monica-logo-turquoise.svg";

export default function Landing() {
  return (
    <section className="landing-section">
      <img className="landing-logo" src={logo} alt="monica logo"></img>
      <h1 className="landing-header">Easiest Food Safety for Caters</h1>
      <p className="landing-copy">
        Everything your cater business needs to comply to food safety
        regulations. Free 14 days trial, no credit card needed. You are minutes
        away too be compliant.
      </p>
      <button className="landing-cta">SHOW ME NOW</button>
    </section>
  );
}
