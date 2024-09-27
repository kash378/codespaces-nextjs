// components/DatePicker.js
import React, { useEffect, useState } from 'react';
import { useDateContext } from '../context/DateContext';

const DatePicker = () => {
  const { selectedDates, toggleDate } = useDateContext();
  const [date, setDate] = useState(new Date());

  const handleDateChange = (e) => {
    setDate(new Date(e.target.value));
  };

  const handleToggleDate = () => {
    toggleDate(date.toDateString());
  };

  return (
    <div className="p-4">
      <input
        type="date"
        onChange={handleDateChange}
        className="border p-2 rounded"
      />
      <button
        onClick={handleToggleDate}
        className="ml-2 bg-blue-500 text-white p-2 rounded"
      >
        {selectedDates.includes(date.toDateString()) ? 'Remove' : 'Add'}
      </button>
      <div className="mt-4">
        <h3 className="font-bold">Selected Dates:</h3>
        <ul>
          {selectedDates.map((d) => (
            <li key={d} className="text-gray-700">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DatePicker;
