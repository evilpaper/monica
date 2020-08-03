import React from "react";

export default function Account() {
  return (
    <section>
      <h1>Account.</h1>
      <p className="general-copy">List of settings for the user.</p>
      <ul>
        <li className="general-specification-list-item">
          <p>· Reset password.</p>
        </li>
        <li className="general-specification-list-item">
          <p>· Update name etc.</p>
        </li>
        <li className="general-specification-list-item">
          <p>· Signout.</p>
        </li>
      </ul>
    </section>
  );
}
