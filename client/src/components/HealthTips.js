import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/health-tips')
      .then(res => setTips(res.data.tips))
      .catch(() => setTips([]));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Health Tips</h2>
      <div className="grid gap-4">
        {tips.map((tip, idx) => (
          <div key={idx} className="health-tip">{tip}</div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips; 