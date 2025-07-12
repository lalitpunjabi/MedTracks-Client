import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MedicineManager from './pages/MedicineManager';
import AIMedicineAssistant from './pages/AIMedicineAssistant';
import MedicineCalendar from './pages/MedicineCalendar';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import HealthTips from './components/HealthTips';
import { useTranslation } from 'react-i18next';
import AIChatbot from './components/AIChatbot';
import AccessibilityBar from './components/AccessibilityBar';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <nav className="bg-health-blue text-white p-4 flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="font-semibold hover:text-health-green">{t('nav.home')}</Link>
          <Link to="/dashboard" className="font-semibold hover:text-health-green">{t('nav.dashboard')}</Link>
          <Link to="/medicines" className="font-semibold hover:text-health-green">{t('nav.medicines')}</Link>
          <Link to="/ai-assistant" className="font-semibold hover:text-health-green">{t('nav.aiAssistant')}</Link>
          <Link to="/calendar" className="font-semibold hover:text-health-green">{t('nav.calendar')}</Link>
          <Link to="/analytics" className="font-semibold hover:text-health-green">{t('nav.analytics')}</Link>
          <Link to="/profile" className="font-semibold hover:text-health-green">{t('nav.profile')}</Link>
          <Link to="/health-tips" className="font-semibold hover:text-health-green">{t('nav.healthTips')}</Link>
        </div>
        <div className="flex items-center space-x-4">
          <select onChange={(e) => changeLanguage(e.target.value)} className="bg-health-green text-white p-2 rounded">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="hi">हिन्दी</option>
          </select>
          <ThemeToggle />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/medicines" element={<MedicineManager />} />
        <Route path="/ai-assistant" element={<AIMedicineAssistant />} />
        <Route path="/calendar" element={<MedicineCalendar />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/health-tips" element={<HealthTips />} />
      </Routes>
      <AIChatbot />
      <AccessibilityBar />
    </Router>
  );
}

export default App;