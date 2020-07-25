import React from "react";

export default function SignIn() {
  return (
    <form className="sign-in">
      <input name="username" type="email" placeholder="Your email"></input>
      <input name="password" type="password" placeholder="Passoword"></input>
      <button>Create account</button>
    </form>
  );
}
