import { useState } from 'react';
import axios from 'axios';
import VoiceAssistant from '../components/VoiceAssistant';

function AIMedicineAssistant() {
  const [medicineName, setMedicineName] = useState('');
  const [details, setDetails] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/ai/medicine-details?medicineName=${medicineName}`);
      setDetails(res.data);
    } catch (error) {
      alert('Failed to fetch details');
    }
  };

  const handleVoiceResult = (result) => {
    setMedicineName(result);
    handleSearch();
  };

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6">AI Medicine Assistant</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg">
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            placeholder="Enter medicine name"
          />
          <VoiceAssistant onResult={handleVoiceResult} />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
        {details && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">{details.name}</h3>
            <p>Purpose: {details.purpose}</p>
            <p>Side Effects: {details.sideEffects.join(', ')}</p>
            <p>Instructions: {details.instructions}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIMedicineAssistant;