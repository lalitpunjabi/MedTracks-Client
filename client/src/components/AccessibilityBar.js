import React, { useState, useEffect, useRef } from 'react';

const AccessibilityBar = () => {
  // Load persisted settings or use defaults
  const [highContrast, setHighContrast] = useState(() => {
    const stored = localStorage.getItem('highContrast');
    return stored ? JSON.parse(stored) : false;
  });
  const [fontSize, setFontSize] = useState(() => {
    const stored = localStorage.getItem('fontSize');
    return stored ? parseFloat(stored) : 1;
  });
  const [announcement, setAnnouncement] = useState('');
  const announceRef = useRef();

  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast);
    localStorage.setItem('highContrast', JSON.stringify(highContrast));
    setAnnouncement(`High contrast mode ${highContrast ? 'enabled' : 'disabled'}`);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}em`;
    localStorage.setItem('fontSize', fontSize);
    setAnnouncement(`Font size set to ${fontSize}`);
  }, [fontSize]);

  // Clear announcement after it is read
  useEffect(() => {
    if (announcement && announceRef.current) {
      const timeout = setTimeout(() => setAnnouncement(''), 1500);
      return () => clearTimeout(timeout);
    }
  }, [announcement]);

  return (
    <div className="fixed bottom-8 left-8 z-50 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center gap-2 px-4 py-2 border dark:border-gray-700">
      <button
        onClick={() => setHighContrast(h => !h)}
        aria-label="Toggle high contrast mode"
        className={`px-3 py-1 rounded font-semibold ${highContrast ? 'bg-yellow-400 text-black' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'} focus:outline-none focus:ring-2 focus:ring-health-blue`}
      >
        High Contrast
      </button>
      <button
        onClick={() => setFontSize(f => Math.max(0.8, f - 0.1))}
        aria-label="Decrease font size"
        className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-health-blue"
      >
        A-
      </button>
      <button
        onClick={() => setFontSize(f => Math.min(1.5, f + 0.1))}
        aria-label="Increase font size"
        className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-health-blue"
      >
        A+
      </button>
      <span
        ref={announceRef}
        aria-live="polite"
        className="sr-only"
      >
        {announcement}
      </span>
    </div>
  );
};

export default AccessibilityBar; 