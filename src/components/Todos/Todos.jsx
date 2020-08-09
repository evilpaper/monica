import React from "react";
import { FiActivity } from "react-icons/fi";

export default function Todos() {
  return (
    <article>
      <h3 className="unit-name">Greasy Spoon</h3>
      <h1 className="date">25 AUG</h1>
      <section className="list">
        <div className="list-header">
          <h4 className="tasks-status">
            <div className="tasks-status-heading">
              <FiActivity className="tasks-status-icon" />
              <span className="tasks-status-statustext">
                Status: 4 Tasks Left
              </span>
            </div>
            <span className="tasks-status-percentage-left">60%</span>
          </h4>
        </div>
        <div className="list-progress-bar"></div>
        <h2 className="list-name">Cleaning</h2>
        <p className="estimated-time">About 5 mins to fix</p>
        <p className="estimated-time">Daily · Completed yesterday by Lisa</p>
        <div className="list-button--container">
          <button className="list-button--open ">Open tasks</button>
        </div>
      </section>
    </article>
  );
}
