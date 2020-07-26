import React from "react";

export default function SignIn() {
  return (
    <section className="sign-up-page">
      <form className="sign-up-form stack">
        <h1 className="sign-up-header">Welcome back</h1>
        <div className="small-stack">
          <label for="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
          ></input>
        </div>
        <div className="small-stack">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter 8 characters or more"
          ></input>
        </div>
        <button>Create account</button>
      </form>
    </section>
  );
}