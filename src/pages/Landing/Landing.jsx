import React from "react";
import logo from "../../assets/monica-logo-turquoise.svg";
import "./styles.css";

export default function Landing(props) {
  function onButtonClick() {
    props.handleLoginClick();
  }

  return (
    <article className="landing-section">
      <div className="landing-frame">
        <img className="landing-logo" src={logo} alt="monica logo"></img>
        <div>
          <h1 className="landing-header">
            Pass <span>food safety </span><br/>
            inspections <span> every </span> time 
          </h1>
          <p className="landing-copy">
            A complete food safety managment system for small and medium food businesses. 
            All checklists and records your business need.  
          </p>
        </div>
        <button onClick={onButtonClick} className="landing-cta">
          GET STARTED FOR FREE
        </button>
        <ul className="landing-checkmarks">
          <li className="landing-checkmark"> ✔ Free trail available </li>
          <li className="landing-checkmark"> ✔ No credit card required </li>
          <li className="landing-checkmark"> ✔ Cancel anytime </li>
        </ul>
      </div>
    </article>
  );
}
