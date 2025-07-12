import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  { date: new Date(), name: 'Aspirin', status: 'taken' },
  { date: new Date(Date.now() + 86400000), name: 'Metformin', status: 'missed' }
];

const statusColors = {
  taken: 'bg-health-green',
  missed: 'bg-red-500',
  active: 'bg-health-blue'
};

const MedicineCalendar = () => {
  const [value, setValue] = useState(new Date());

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dayEvents = events.filter(e => e.date.toDateString() === date.toDateString());
      return dayEvents.map((e, i) => (
        <div key={i} className={`mt-1 px-2 py-1 rounded text-xs text-white ${statusColors[e.status]}`}>{e.name}</div>
      ));
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-health-blue/10 dark:from-gray-900 dark:to-health-blue/30 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white/80 dark:bg-glass-dark rounded-3xl shadow-glass p-8 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-health-blue dark:text-health-green">Medicine Calendar</h2>
        <Calendar
          onChange={setValue}
          value={value}
          tileContent={tileContent}
          className="rounded-xl shadow-lg"
        />
        <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm">* Drag-and-drop to reschedule coming soon!</div>
      </div>
    </div>
  );
};

export default MedicineCalendar;