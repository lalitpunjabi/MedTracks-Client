import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors shadow hover:scale-110"
      aria-label="Toggle dark/light mode"
    >
      {theme === 'dark' ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-blue-600" />}
    </button>
  );
};

export default ThemeToggle;