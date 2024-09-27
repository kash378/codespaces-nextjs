// context/DateContext.js
import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  const toggleDate = (date) => {
    setSelectedDates((prev) =>
      prev.includes(date)
        ? prev.filter((d) => d !== date)
        : [...prev, date]
    );
  };

  return (
    <DateContext.Provider value={{ selectedDates, toggleDate }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => {
  return useContext(DateContext);
};
