import React from "react";

export default function Team() {
  return (
    <article>
      <div className="wrapper">
        <h1>Team.</h1>
        <p className="general-copy">List of users.</p>
        <ul>
          <li className="general-specification-list-item">
            <p>· New users can be invited with email.</p>
          </li>
          <li className="general-specification-list-item">
            <p>
              · Each row show basic stats like when last active, how much the user contribute, remind button.
            </p>
          </li>
          <li className="general-specification-list-item">
            <p>
              · Each user can be opened to a new view revealing more info like last login, to-do's completed, how-to's read.
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}
