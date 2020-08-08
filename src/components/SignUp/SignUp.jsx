import React from "react";

function SignUp() {
  return (
    <article className="sign-up-page">
      <form className="sign-up-form stack">
        <h1 className="sign-up-header">Create account to save your data</h1>
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
    </article>
  );
}

export default SignUp;
