import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import "./styles.css";

export default function Todos() {
  const [showCalendar, setShowCalendar] = useState(false);

  function handleCalenderClick(e) {
    setShowCalendar(!showCalendar);
  }

  if (showCalendar) {
    return <h1>Calendar</h1>;
  } else {
    return (
      <article>
        <div className="wrapper">
        <section className="top-bar">
          <div className="to-do-selected-day">Tuesday, 17 November 2020</div>
          <button
            onClick={handleCalenderClick}
            className="to-do-calendar-button"
          >
            <FiCalendar className="to-do-calendar-button__icon" />
            Change day
          </button>
        </section>
          <h1>To do's.</h1>
            <p className="general-copy">List of to-do's grouped in checklists.</p>
            <ul>
              <li className="general-specification-list-item">
                <p>· Checklists can be be opened to reveal the content i.e the actual to-do's.</p>
              </li>
              <li className="general-specification-list-item">
                <p>· The page can show a calendar that can be called upon and that show which day's you have to-do's on like Moleskines Timepage.</p>
              </li>
            </ul>
        </div>
      </article>
    );
  }
}
