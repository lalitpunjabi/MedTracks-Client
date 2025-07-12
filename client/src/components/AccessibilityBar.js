import React, { useState, useEffect } from 'react';

const AccessibilityBar = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast);
    document.documentElement.style.fontSize = `${fontSize}em`;
  }, [highContrast, fontSize]);

  return (
    <div className="fixed bottom-8 left-8 z-50 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center gap-2 px-4 py-2 border dark:border-gray-700">
      <button
        onClick={() => setHighContrast(h => !h)}
        className={`px-3 py-1 rounded font-semibold ${highContrast ? 'bg-yellow-400 text-black' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'}`}
      >
        HC
      </button>
      <button
        onClick={() => setFontSize(f => Math.max(0.8, f - 0.1))}
        className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        A-
      </button>
      <button
        onClick={() => setFontSize(f => Math.min(1.5, f + 0.1))}
        className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
      >
        A+
      </button>
    </div>
  );
};

export default AccessibilityBar; 