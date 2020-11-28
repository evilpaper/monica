import React from "react";

export default function Unit() {
  return (
    <article>
      <div className="wrapper">
        <h1>Unit.</h1>
        <p className="general-copy">List of settings for the unit.</p>
        <ul>
          <li className="general-specification-list-item">
            <p>· Opening hours.</p>
          </li>
          <li className="general-specification-list-item">
            <p>· Opening days.</p>
          </li>
          <li className="general-specification-list-item">
            <p>· Day break.</p>
          </li>
          <li className="general-specification-list-item">
            <p>· Billings (for account owner).</p>
          </li>
        </ul>
      </div>
    </article>
  );
}
