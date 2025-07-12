import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Papa from 'papaparse';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Analytics() {
  const [intakes, setIntakes] = useState([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const fetchIntakes = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/intake', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIntakes(res.data.intakes);
      setStreak(res.data.streak);
    };
    fetchIntakes();
  }, []);

  const adherenceData = {
    labels: ['Taken', 'Missed', 'Postponed'],
    datasets: [
      {
        label: 'Medicine Adherence',
        data: [
          intakes.filter(i => i.status === 'taken').length,
          intakes.filter(i => i.status === 'missed').length,
          intakes.filter(i => i.status === 'postponed').length,
        ],
        backgroundColor: ['#10B981', '#EF4444', '#F59E0B'],
      },
    ],
  };

  const exportCSV = () => {
    const csv = Papa.unparse(intakes);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'analytics.csv';
    a.click();
  };

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6">Progress Analytics</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">Adherence Overview</h3>
        <Bar data={adherenceData} options={{ responsive: true }} />
      </div>
      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
        <p className="text-lg font-semibold">Current Streak: {streak} days 🔥</p>
        <p>Keep up your consistency!</p>
      </div>
      <button onClick={exportCSV} className="bg-health-blue text-white px-4 py-2 rounded mb-4">
        Export CSV
      </button>
      <div className="mt-4 p-4 bg-gray-100 rounded">[Predictive insights here]</div>
    </div>
  );
}

export default Analytics;