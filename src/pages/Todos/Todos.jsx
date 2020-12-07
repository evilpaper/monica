import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import Checklist from "../../components/Checklist";
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
          <div className="to-do-selected-day">
            <div className="to-do-selected-day__day">Tuesday</div>
            <div>17 November 2020</div>
          </div>
          <button
            onClick={handleCalenderClick}
            className="to-do-calendar-button"
          >
            <FiCalendar className="to-do-calendar-button__icon" />
            Change day
          </button>
        </section>
            <Checklist />
        </div>
      </article>
    );
  }
}
