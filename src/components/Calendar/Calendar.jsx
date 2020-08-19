import React from "react";

export default function Calendar() {
  return (
    <div className="calendar">
      <div className="month-indicator">August</div>
      <div className="day-of-week">
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>
      <div className="date-grid">
        <button>
          <time datetime="2020-08-01">1</time>
          <time datetime="2020-08-02">2</time>
          <time datetime="2020-08-03">3</time>
          <time datetime="2020-08-04">4</time>
          <time datetime="2020-08-05">5</time>
          <time datetime="2020-08-06">6</time>
          <time datetime="2020-08-07">7</time>
          <time datetime="2020-08-08">8</time>
          <time datetime="2020-08-09">9</time>
          <time datetime="2020-08-10">10</time>
          <time datetime="2020-08-11">11</time>
          <time datetime="2020-08-12">12</time>
          <time datetime="2020-08-13">13</time>
          <time datetime="2020-08-14">14</time>
          <time datetime="2020-08-15">15</time>
          <time datetime="2020-08-16">16</time>
          <time datetime="2020-08-17">17</time>
          <time datetime="2020-08-18">18</time>
          <time datetime="2020-08-19">19</time>
          <time datetime="2020-08-20">20</time>
          <time datetime="2020-08-21">21</time>
          <time datetime="2020-08-22">22</time>
          <time datetime="2020-08-23">23</time>
          <time datetime="2020-08-24">24</time>
          <time datetime="2020-08-25">25</time>
          <time datetime="2020-08-26">26</time>
          <time datetime="2020-08-27">27</time>
          <time datetime="2020-08-28">28</time>
          <time datetime="2020-08-29">29</time>
          <time datetime="2020-08-30">30</time>
          <time datetime="2020-08-31">31</time>
        </button>
      </div>
    </div>
  );
}
