import React from "react";

export default function Todos() {
  return (
    <section>
      <h1>To Do's.</h1>
      <p className="general-copy">
        Lists of tasks for selected day, default = today.
      </p>
      <ul>
        <li>
          <p>· Task should be able to completed.</p>
        </li>
      </ul>
    </section>
  );
}
