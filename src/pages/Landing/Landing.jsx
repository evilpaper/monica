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
        <h1 className="landing-header">
          The <span>easy</span> way to <br/>
          pass food safety <br/>
          inspections <span> every </span> time 
        </h1>
        <p className="landing-copy">
          A complete food safety managment system for small and medium food businesses.   
        </p>
        <button onClick={onButtonClick} className="landing-cta">
          TRY FOR FREE NOW
        </button>
      </div>
    </article>
  );
}
