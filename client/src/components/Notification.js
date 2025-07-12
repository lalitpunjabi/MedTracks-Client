import React from 'react';

const Notification = ({ medicine, time }) => {
  const sendNotification = () => {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification(`Time to take your medicine: ${medicine}`);
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification(`Time to take your medicine: ${medicine}`);
          }
        });
      }
    } else {
      alert(`Time to take your medicine: ${medicine} at ${time}`);
    }
  };

  return (
    <button
      onClick={sendNotification}
      className="bg-health-accent text-white px-3 py-1 rounded shadow hover:bg-health-green transition mt-2"
    >
      Remind Me
    </button>
  );
};

export default Notification;