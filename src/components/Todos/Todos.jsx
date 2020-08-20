import React from "react";
import { FiCalendar } from "react-icons/fi";

export default function Todos() {
  return (
    <article>
      <section className="top-bar">
        {" "}
        <h3 className="unit-name">Greasy Spoon</h3>
        <button className="to-do-calendar-button">
          <FiCalendar className="to-do-calendar-button__icon" />
          View calendar
        </button>
      </section>
      <main className="to-do-main">
        <section className="to-do-today-section">
          <div className="to-do-header">
            <h1 className="to-do-heading">Today</h1>
          </div>
          <section className="to-do-checklist">
            <h2 className="to-do-checklist-name">Daily Checks</h2>
            <h4 className="to-do-checklist-status">
              <span className="to-do-checklist-status__completion">40%</span>
              <span className="to-do-checklist-status__est-time">
                5 min work
              </span>
            </h4>
            <div className="progress_container">
              <div className="progress-bar"></div>
            </div>
            <h4 className="to-do-checklist-responsible">
              <span className="to-do-checklist-responsible__text">
                Responsible: everyone at work
              </span>
              <span className="to-do-checklist-status__est-time"></span>
            </h4>
            {/* <div className="to-do-checklist-users">
          <span class="dot dot1">
            <span class="initials">PL</span>
          </span>
          <span class="dot dot2">
            <span class="initials">MS</span>
          </span>
          <span class="dot dot3">
            <span class="initials">SH</span>
          </span>
        </div> */}
            <div className="to-do-checklist-button-container">
              <button className="to-do-checklist-list-button to-do-checklist-list-button__tertiary">
                Remind
              </button>
              <button className="to-do-checklist-list-button to-do-checklist-list-button__primary">
                Go to tasks
              </button>
            </div>
          </section>
        </section>
        <section className="to-do-upcoming-section">
          <div className="to-do-header">
            <h1 className="to-do-heading">Upcoming</h1>
          </div>
          <section className="to-do-checklist">
            <h2 className="to-do-checklist-name">Weekly Checks</h2>
            <h4 className="to-do-checklist-status">
              <span className="to-do-checklist-status__completion">40%</span>
              <span className="to-do-checklist-status__est-time">
                10 min work, due tomorrow
              </span>
            </h4>
            <div className="progress_container">
              <div className="progress-bar"></div>
            </div>
            <h4 className="to-do-checklist-responsible">
              <span className="to-do-checklist-responsible__text">
                Responsible: everyone
              </span>
              <span className="to-do-checklist-status__est-time"></span>
            </h4>
            {/* <div className="to-do-checklist-users">
          <span class="dot dot1">
            <span class="initials">PL</span>
          </span>
          <span class="dot dot2">
            <span class="initials">MS</span>
          </span>
          <span class="dot dot3">
            <span class="initials">SH</span>
          </span>
        </div> */}
            <div className="to-do-checklist-button-container">
              <button className="to-do-checklist-list-button to-do-checklist-list-button__tertiary">
                Remind
              </button>
              <button className="to-do-checklist-list-button to-do-checklist-list-button__secondary">
                Go to tasks
              </button>
            </div>
          </section>
        </section>
      </main>
    </article>
  );
}
