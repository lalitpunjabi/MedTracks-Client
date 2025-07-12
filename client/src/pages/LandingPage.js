import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../components/ThemeToggle';
import TestimonialsSlider from '../components/TestimonialsSlider';
import { ChatBubbleLeftRightIcon, CalendarDaysIcon, GlobeAltIcon, ChartBarIcon, BellAlertIcon, TrophyIcon } from '@heroicons/react/24/solid';
// import Three.js animation here if desired

const features = [
  {
    icon: <ChatBubbleLeftRightIcon className="w-10 h-10 text-health-blue dark:text-health-green" />,
    title: 'AI Medicine Assistant',
    desc: 'Get instant answers and reminders with our AI-powered assistant.'
  },
  {
    icon: <CalendarDaysIcon className="w-10 h-10 text-health-blue dark:text-health-green" />,
    title: 'Smart Calendar',
    desc: 'Visualize and manage your medicine schedule with ease.'
  },
  {
    icon: <GlobeAltIcon className="w-10 h-10 text-health-blue dark:text-health-green" />,
    title: 'Multi-Language',
    desc: 'Use MedTrack in English, Español, or हिन्दी.'
  },
  {
    icon: <ChartBarIcon className="w-10 h-10 text-health-blue dark:text-health-green" />,
    title: 'Advanced Analytics',
    desc: 'Track your progress and export your data.'
  },
  {
    icon: <BellAlertIcon className="w-10 h-10 text-health-blue dark:text-health-green" />,
    title: 'Real-Time Notifications',
    desc: 'Never miss a dose with browser and push reminders.'
  },
  {
    icon: <TrophyIcon className="w-10 h-10 text-health-blue dark:text-health-green" />,
    title: 'Achievements',
    desc: 'Earn badges for healthy habits and streaks.'
  }
];

const stats = [
  { label: 'Users', value: '12,500+' },
  { label: 'Medicines Tracked', value: '48,000+' },
  { label: 'Active Streaks', value: '2,300+' }
];

const LandingPage = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  // Newsletter form state
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'success' | 'error' | null

  const handleLangChange = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setNewsletterStatus('success');
      setEmail('');
      // Here you would send the email to your backend or service
    } else {
      setNewsletterStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient dark:bg-gradient-to-br dark:from-glass-dark dark:to-health-blue flex flex-col items-center justify-start">
      {/* Top bar with language switcher and theme toggle */}
      <div className="w-full flex justify-end items-center gap-4 p-4">
        <label htmlFor="lang-switcher" className="sr-only">Select language</label>
        <select
          id="lang-switcher"
          value={lang}
          onChange={handleLangChange}
          className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          aria-label="Select language"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="hi">हिन्दी</option>
        </select>
        <ThemeToggle aria-label="Toggle dark/light mode" />
      </div>
      <header className="w-full max-w-5xl mx-auto py-12 flex flex-col items-center text-center">
        <div className="bg-glass dark:bg-glass-dark rounded-3xl shadow-glass p-8 backdrop-blur-md">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-health-blue dark:text-health-green drop-shadow-lg">MedTrack</h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-6">Your AI-powered, multi-language medicine tracker for a healthier life.</p>
          {/* 3D animation placeholder replaced with SVG illustration */}
          <div className="my-8 flex justify-center">
            <div className="w-48 h-48 flex items-center justify-center animate-float">
              <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="100" cy="100" rx="90" ry="90" fill="#E0F7FA" />
                <rect x="60" y="60" width="80" height="40" rx="20" fill="#4FD1C5" stroke="#00796B" strokeWidth="4" />
                <rect x="80" y="80" width="40" height="80" rx="20" fill="#FFF" stroke="#00796B" strokeWidth="4" />
                <circle cx="100" cy="100" r="12" fill="#00796B" />
                <rect x="110" y="70" width="20" height="8" rx="4" fill="#FFF" />
                <rect x="70" y="122" width="60" height="10" rx="5" fill="#B2DFDB" />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/70 dark:bg-glass-dark rounded-xl px-8 py-4 shadow text-center">
                <div className="text-3xl font-bold text-health-blue dark:text-health-green">{s.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{s.label}</div>
              </div>
            ))}
          </div>
          <a href="/register" className="inline-block bg-health-green text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-health-accent focus:scale-105 hover:scale-105 transition-transform duration-200" aria-label="Get Started with MedTrack">Get Started</a>
        </div>
      </header>
      <section className="w-full max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-health-blue dark:text-health-green">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white/80 dark:bg-glass-dark rounded-2xl p-6 shadow flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-within:scale-105">
              <div className="mb-2">{f.icon}</div>
              <div className="font-bold text-lg mb-1 text-health-blue dark:text-health-green">{f.title}</div>
              <div className="text-gray-600 dark:text-gray-300">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-health-blue dark:text-health-green">What Users Say</h2>
        <TestimonialsSlider />
      </section>
      <section className="w-full max-w-xl mx-auto py-12">
        <div className="bg-white/80 dark:bg-glass-dark rounded-2xl p-8 shadow text-center">
          <h2 className="text-2xl font-bold mb-4 text-health-blue dark:text-health-green">Subscribe to our newsletter</h2>
          <form className="flex flex-col md:flex-row items-center justify-center gap-4" onSubmit={handleNewsletterSubmit} role="form" aria-label="Newsletter subscription form">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              className="p-3 rounded border border-gray-300 dark:border-gray-600 flex-1"
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-label="Email address"
              required
            />
            <button type="submit" className="bg-health-green text-white px-6 py-3 rounded font-semibold hover:bg-health-accent focus:scale-105 hover:scale-105 transition-transform duration-200" aria-label="Subscribe to newsletter">Subscribe</button>
          </form>
          {newsletterStatus === 'success' && (
            <div className="mt-4 text-green-600 font-semibold">Thank you for subscribing!</div>
          )}
          {newsletterStatus === 'error' && (
            <div className="mt-4 text-red-600 font-semibold">Please enter a valid email address.</div>
          )}
        </div>
      </section>
      {/* Smooth scroll target sections */}
      <section id="about" className="w-full max-w-5xl mx-auto py-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4 text-health-blue dark:text-health-green">About</h2>
        <p className="text-gray-700 dark:text-gray-300">MedTrack is your AI-powered, multi-language medicine tracker for a healthier life. Our mission is to make medication management simple, accessible, and effective for everyone.</p>
      </section>
      <section id="privacy" className="w-full max-w-5xl mx-auto py-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4 text-health-blue dark:text-health-green">Privacy Policy</h2>
        <p className="text-gray-700 dark:text-gray-300">Your privacy is important to us. MedTrack does not share your data with third parties and uses industry-standard security practices to protect your information.</p>
      </section>
      <section id="contact" className="w-full max-w-5xl mx-auto py-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4 text-health-blue dark:text-health-green">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">Have questions or feedback? Email us at <a href="mailto:support@medtrack.com" className="text-health-blue underline">support@medtrack.com</a>.</p>
      </section>
      {/* Social Proof Section */}
      <section className="w-full max-w-5xl mx-auto py-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-200">As seen on</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="Redux" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express.js" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/MongoDB_Logo.svg" alt="MongoDB" className="h-12 w-auto grayscale hover:grayscale-0 transition" />
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-white/90 dark:bg-glass-dark border-t border-gray-200 dark:border-gray-700 py-6 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="text-health-blue dark:text-health-green font-bold text-lg">MedTrack &copy; {new Date().getFullYear()}</div>
          <nav className="flex gap-6 text-gray-600 dark:text-gray-300 text-sm" aria-label="Footer navigation">
            <a href="#about" className="hover:text-health-blue dark:hover:text-health-green transition" aria-label="About section">About</a>
            <a href="#privacy" className="hover:text-health-blue dark:hover:text-health-green transition" aria-label="Privacy Policy section">Privacy Policy</a>
            <a href="#contact" className="hover:text-health-blue dark:hover:text-health-green transition" aria-label="Contact section">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;