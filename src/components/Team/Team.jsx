import React from "react";

export default function Team() {
  return (
    <section>
      <h1>Team.</h1>
      <p className="general-copy">List of users.</p>
      <ul>
        <li className="general-specification-list-item">
          <p>· New users can be invited with email.</p>
        </li>
      </ul>
      <ul>
        <li className="general-specification-list-item">
          <p>
            · User status include last login, to-do's completed, how-to's read.
          </p>
        </li>
      </ul>
    </section>
  );
}
