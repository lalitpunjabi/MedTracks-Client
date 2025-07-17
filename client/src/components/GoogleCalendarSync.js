import axios from 'axios';

function GoogleCalendarSync({ medicine }) {
  const syncToGoogleCalendar = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://medtracks-server.onrender.com/api/medicines/sync-calendar',
        { medicineId: medicine._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Medicine schedule synced to Google Calendar (mock implementation).');
    } catch (error) {
      alert('Failed to sync with Google Calendar');
    }
  };

  return (
    <button
      onClick={syncToGoogleCalendar}
      className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-health-blue"
    >
      Sync to Google Calendar
    </button>
  );
}

export default GoogleCalendarSync;