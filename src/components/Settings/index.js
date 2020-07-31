import React from "react";

export default function Settings() {
  return (
    <section>
      <h1>Settings.</h1>
      <p className="general-copy">List of settings.</p>
      <ul>
        <li>
          <p>· Opening hours.</p>
        </li>
        <li>
          <p>· Opening days.</p>
        </li>
        <li>
          <p>· Day break.</p>
        </li>
        <li>
          <p>· Billings (for account owner).</p>
        </li>
      </ul>
    </section>
  );
}
