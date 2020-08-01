import React from "react";

function SignIn() {
  return (
    <section className="sign-up-page">
      <form className="sign-up-form stack">
        <h1 className="sign-up-header">Welcome back</h1>
        <div className="small-stack">
          <label className="sign-up-form__label" for="email">
            Email
          </label>
          <input
            className="sign-up-form__input"
            name="email"
            type="email"
            placeholder="you@example.com"
          ></input>
        </div>
        <div className="small-stack">
          <label className="sign-up-form__label">Password</label>
          <input
            className="sign-up-form__input"
            name="password"
            type="password"
            placeholder="Enter 8 characters or more"
          ></input>
        </div>
        <button className="sign-up-form__button">Create account</button>
      </form>
    </section>
  );
}

export default SignIn;
