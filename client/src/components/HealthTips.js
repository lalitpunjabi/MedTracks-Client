import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get('https://medtracks-server.onrender.com/api/health-tips')
      .then(res => {
        setTips(res.data.tips);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load health tips. Please try again later.');
        setTips([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-6">Loading health tips...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Health Tips</h2>
      <div className="grid gap-4">
        {tips.length === 0 ? (
          <div>No health tips available at the moment.</div>
        ) : (
          tips.map((tip, idx) => (
            <div key={idx} className="health-tip">{tip}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default HealthTips; 