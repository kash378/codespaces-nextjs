import React from 'react';
import { useDate } from '../context/DateContext';

const CalendarPreview = () => {
    const { recurrence } = useDate();
    const { startDate, endDate } = recurrence;

    const generateRecurrenceDates = () => {
        if (!startDate) return [];
        const dates = [];
        let currentDate = new Date(startDate);

        // Generate dates until the end date
        while (currentDate <= (endDate || new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate()))) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);  // Daily recurrence
        }
        return dates;
    };

    const dates = generateRecurrenceDates();

    return (
        <div className="p-4">
            <h2 className="text-lg">Selected Recurrence Dates:</h2>
            <ul>
                {dates.length === 0 ? (
                    <li>No dates selected. Please choose a start date.</li>
                ) : (
                    dates.map((date, index) => (
                        <li key={index}>{date.toLocaleDateString()}</li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default CalendarPreview;
