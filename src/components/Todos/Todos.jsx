import React from "react";
import { FiActivity, FiCalendar } from "react-icons/fi";

export default function Todos() {
  return (
    <article>
      <section className="top-bar">
        {" "}
        <h3 className="unit-name">Greasy Spoon</h3>
        <button className="to-do-calendar-button">
          <FiCalendar className="to-do-calendar-button__icon" />
          Open calendar
        </button>
      </section>
      <div className="to-do-header">
        <h1 className="to-do-heading">Today</h1>
        <div className="to-do-todays-status">
          <FiActivity className="to-do-todays-status__icon" />
          <span className="to-do-todays-status__text">Working on it</span>
        </div>
      </div>
      <section className="to-do-checklist">
        <h2 className="to-do-checklist-name">Daily Checks</h2>
        <h4 className="to-do-checklist-status">
          <span className="to-do-checklist-status__completion">
            60% · 4 Tasks left
          </span>
          <span className="to-do-checklist-status__est-time">5 mins</span>
        </h4>
        <div className="to-do-checklist-users">
          <span class="dot dot1">
            <span class="initials">PL</span>
          </span>
          <span class="dot dot2">
            <span class="initials">MS</span>
          </span>
          <span class="dot dot3">
            <span class="initials">SH</span>
          </span>
        </div>
        <div className="to-do-checklist-button-container">
          <button className="to-do-chacklist-list-button">Go to tasks</button>
        </div>
      </section>
      <div className="to-do-header">
        <h1 className="to-do-heading">Upcoming</h1>
      </div>
    </article>
  );
}
