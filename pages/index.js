// pages/index.js
import React from 'react';
import { DateProvider } from '../context/DateContext';
import DatePicker from '../components/DatePicker';

export default function Home() {
  return (
    <DateProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Date Picker</h1>
        <DatePicker />
      </div>
    </DateProvider>
  );
}
