import React from "react";

export default function Todos() {
  return (
    <article>
      <h3 className="unit-name">Greasy Spoon</h3>
      <h1 className="date">25 AUG</h1>
      <section className="list">
        <h2 className="list-name">Cleaning</h2>
        <h4 className="tasks-status">
          <span className="tasks-status-figure">5</span> tasks left
        </h4>
        <p className="estimated-time">Should take about 5 mins</p>
        <button className="list-button--open ">FIX IT</button>
      </section>
    </article>
  );
}
