import React from 'react';
import { useTranslation } from 'react-i18next';

const stats = [
  { label: 'Medicines', value: 8, icon: '💊', color: 'bg-health-blue' },
  { label: 'Streak', value: '7 days', icon: '🔥', color: 'bg-health-green' },
  { label: 'Missed Doses', value: 2, icon: '⏰', color: 'bg-health-accent' }
];

const achievements = [
  { icon: '🏅', label: '7-Day Streak' },
  { icon: '🎯', label: 'First Log' },
  { icon: '💯', label: '100% Adherence' },
  { icon: '🌟', label: 'Early Bird' },
  { icon: '🦸‍♂️', label: 'Carer Mode' }
];

const Dashboard = () => {
  const { t } = useTranslation();
  const user = { name: 'Alex', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-health-blue/10 dark:from-gray-900 dark:to-health-blue/30 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white/80 dark:bg-glass-dark rounded-3xl shadow-glass p-8 mb-8 flex flex-col md:flex-row items-center gap-8">
        <img src={user.avatar} alt="avatar" className="w-24 h-24 rounded-full border-4 border-health-green shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold text-health-blue dark:text-health-green mb-2">Welcome, {user.name}!</h2>
          <p className="text-gray-600 dark:text-gray-300">Here's your health at a glance.</p>
        </div>
      </div>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {stats.map((s, i) => (
          <div key={i} className={`rounded-2xl p-6 shadow text-center text-white ${s.color} bg-opacity-90`}>
            <div className="text-4xl mb-2">{s.icon}</div>
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-lg">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-3xl bg-white/80 dark:bg-glass-dark rounded-2xl p-6 shadow mb-8">
        <h3 className="text-xl font-bold mb-2 text-health-blue dark:text-health-green">Streak Progress</h3>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden">
          <div className="bg-health-green h-6 rounded-full" style={{ width: '70%' }}></div>
        </div>
        <div className="text-right text-sm text-gray-600 dark:text-gray-300 mt-1">7/10 days</div>
      </div>
      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white/80 dark:bg-glass-dark rounded-2xl p-6 shadow">
          <h4 className="font-bold text-health-blue dark:text-health-green mb-2">Quick Actions</h4>
          <div className="flex flex-wrap gap-4">
            <button className="bg-health-green text-white px-4 py-2 rounded shadow hover:bg-health-accent transition">Add Medicine</button>
            <button className="bg-health-blue text-white px-4 py-2 rounded shadow hover:bg-health-accent transition">Log Dose</button>
            <button className="bg-health-accent text-white px-4 py-2 rounded shadow hover:bg-health-green transition">Export Data</button>
          </div>
        </div>
        <div className="flex-1 bg-white/80 dark:bg-glass-dark rounded-2xl p-6 shadow">
          <h4 className="font-bold text-health-blue dark:text-health-green mb-2">Achievements</h4>
          <ul className="space-y-2">
            {achievements.map((a, i) => (
              <li key={i} className="flex items-center gap-2"><span className="text-xl">{a.icon}</span> {a.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;