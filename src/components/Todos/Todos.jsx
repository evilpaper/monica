import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";

export default function Todos() {
  const [showCalendar, setShowCalendar] = useState(false);

  function handleCalenderClick(e) {
    console.log("Tjihoo, you clicked the calendar button");
    setShowCalendar(!showCalendar);
  }

  if (showCalendar) {
    return <h1>Calendar</h1>;
  } else {
    return (
      <article>
        <section className="top-bar">
          {" "}
          <h3 className="unit-name">Greasy Spoon</h3>
          <button
            onClick={handleCalenderClick}
            className="to-do-calendar-button"
          >
            <FiCalendar className="to-do-calendar-button__icon" />
            View calendar
          </button>
        </section>
        <main className="to-do-main">
        </main>
      </article>
    );
  }
}
