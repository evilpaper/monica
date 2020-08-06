import React from "react";

export default function Todos() {
  return (
    <section>
      <h1>To Do's.</h1>
      <p className="general-copy">
        Lists of tasks for selected day, default = today.
      </p>
      <ul className="task-list stack">
        <li>
          <button className="task-category">
            <p>Cold Storage Checks</p>
          </button>
        </li>
        <li>
          <button className="task-category">
            <p>Cleaning</p>
          </button>
        </li>
        <li>
          <button className="task-category">
            <p>Preparation Checks</p>
          </button>
        </li>
        <li>
          <button className="task-category">
            <p>Communcation with law enforcer</p>
          </button>
        </li>
      </ul>
    </section>
  );
}
