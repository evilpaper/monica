import React from "react";
import logo from "../../assets/monica-logo-turquoise.svg";
import avatar from "../../assets/social-proof-avatar.jpg"
import "./styles.css";

export default function Landing(props) {
  function onButtonClick() {
    props.handleLoginClick();
  }

  console.log(avatar);

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
            A complete food safety management app for small and medium food businesses.
            You only need to invest <strong>5 mins</strong> a day.
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
        <section className="social-proof">
          <img src={avatar} className="social-proof-avatar" alt="social-proof-avatar"/>
          <div className="social-proof-testimonial">
            <blockquote className="social-proof-testimonial-quote">"Smidigt o enkelt! Sparar massor av tid!"</blockquote>
            <p className="social-proof-testimonial-name">Frank Lowe · Owner · Greasy Spoon</p>
          </div>
        </section>
      </div>
    </article>
  );
}
