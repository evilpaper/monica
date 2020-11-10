import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";
import "./styles.css";

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
          <h1>To do's.</h1>
            <p className="general-copy">List of how-to's.</p>
            <ul>
              <li className="general-specification-list-item">
                <p>· How-to's can be opened.</p>
              </li>
              <li className="general-specification-list-item">
                <p>· How-to's contain text and images.</p>
              </li>
              <li className="general-specification-list-item">
                <p>· How-to's have a button "read and understood".</p>
              </li>
            </ul>
      </article>
      
    );
  }
}
