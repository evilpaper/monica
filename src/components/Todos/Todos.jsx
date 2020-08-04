import React from "react";

export default function Todos() {
  return (
    <section>
      <h1>To Do's.</h1>
      <p className="general-copy">
        Lists of tasks for selected day, default = today.
      </p>
      <ul>
        <li className="general-specification-list-item">
          <p>· Tasks are group in categories.</p>
        </li>
        <li className="general-specification-list-item">
          <p>· Task should be able to completed.</p>
        </li>
        <li className="general-specification-list-item">
          <p>· Tasks can have input values.</p>
        </li>
      </ul>
    </section>
  );
}
