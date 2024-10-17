import  { useState } from "react";
import "./Calendar.css"; // Optional for custom styling

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the current month and year
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Get the first and last day of the month
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // Get the number of days in the month
  const daysInMonth = lastDayOfMonth.getDate();

  // Get the index of the first day of the month
  const firstDayIndex = firstDayOfMonth.getDay();

  // Generate an array of days in the current month
  const days = [...Array(daysInMonth)].map((_, i) => i + 1);

  // Handle navigation to previous and next months
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>&lt;</button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>

      <div className="calendar-grid">
        {/* Render the days of the week */}
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day-name">
            {day}
          </div>
        ))}

        {/* Render blank days before the first day of the month */}
        {[...Array(firstDayIndex)].map((_, index) => (
          <div key={index} className="calendar-empty"></div>
        ))}

        {/* Render the days of the month */}
        {days.map((day, index) => (
          <div key={index} className="calendar-day">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
