import React, { useState } from 'react';
import axios from 'axios';
import GoogleCalendarSync from '../components/GoogleCalendarSync';

const initialMeds = [
  { name: 'Aspirin', status: 'active', time: '8:00 AM' },
  { name: 'Metformin', status: 'missed', time: '12:00 PM' },
  { name: 'Vitamin D', status: 'taken', time: '6:00 PM' }
];

const statusColors = {
  active: 'bg-health-blue',
  missed: 'bg-red-500',
  taken: 'bg-health-green'
};

const MedicineManager = () => {
  const [meds, setMeds] = useState(initialMeds);
  const [editIdx, setEditIdx] = useState(null);
  const [editName, setEditName] = useState('');

  const startEdit = (idx) => {
    setEditIdx(idx);
    setEditName(meds[idx].name);
  };
  const saveEdit = (idx) => {
    const newMeds = [...meds];
    newMeds[idx].name = editName;
    setMeds(newMeds);
    setEditIdx(null);
  };
  const removeMed = (idx) => setMeds(meds.filter((_, i) => i !== idx));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/medicines', { name: editName, type: 'tablet', purpose: '', dosage: '', doctorName: '', startDate: '', endDate: '', schedule: [{ time: '', dose: '' }] }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMeds([...meds, { name: res.data.name, status: 'active', time: res.data.schedule[0].time }]);
      alert('Medicine added successfully');
      setEditName('');
    } catch (error) {
      alert('Failed to add medicine');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-health-blue/10 dark:from-gray-900 dark:to-health-blue/30 p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {meds.map((med, idx) => (
          <div key={idx} className={`rounded-2xl p-6 shadow text-white ${statusColors[med.status]} bg-opacity-90 flex flex-col gap-2`}>
            {editIdx === idx ? (
              <div className="flex gap-2 items-center">
                <input value={editName} onChange={e => setEditName(e.target.value)} className="p-2 rounded text-black flex-1" />
                <button onClick={() => saveEdit(idx)} className="bg-health-green px-3 py-1 rounded">Save</button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">{med.name}</div>
                <button onClick={() => startEdit(idx)} className="bg-white/30 px-2 py-1 rounded">Edit</button>
              </div>
            )}
            <div className="flex justify-between items-center mt-2">
              <div className="text-lg">Time: {med.time}</div>
              <div className="capitalize px-3 py-1 rounded-full bg-white/30 text-xs font-semibold">{med.status}</div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="bg-health-green px-3 py-1 rounded text-white">Log Dose</button>
              <button onClick={() => removeMed(idx)} className="bg-red-500 px-3 py-1 rounded text-white">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-health-blue text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-health-accent transition" onClick={handleSubmit}>Add New Medicine</button>
    </div>
  );
};

export default MedicineManager;