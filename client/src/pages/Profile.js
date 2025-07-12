import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t, i18n } = useTranslation();
  const [avatar, setAvatar] = useState('https://randomuser.me/api/portraits/men/32.jpg');
  const [color, setColor] = useState('health-blue');
  const [lang, setLang] = useState(i18n.language);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatar(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (e) => setColor(e.target.value);
  const handleLangChange = (e) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-health-blue/10 dark:from-gray-900 dark:to-health-blue/30 p-6 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white/80 dark:bg-glass-dark rounded-3xl shadow-glass p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-health-blue dark:text-health-green">Profile</h2>
        <div className="flex flex-col items-center mb-6">
          <img src={avatar} alt="avatar" className="w-32 h-32 rounded-full border-4 border-health-green shadow-lg mb-2" />
          <input type="file" accept="image/*" onChange={handleAvatarChange} className="mb-2" />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <label className="block font-semibold mb-1">Theme Color</label>
            <select value={color} onChange={handleColorChange} className="w-full p-2 rounded border">
              <option value="health-blue">Blue</option>
              <option value="health-green">Green</option>
              <option value="health-accent">Accent</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Language</label>
            <select value={lang} onChange={handleLangChange} className="w-full p-2 rounded border">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
        <button className="mt-8 bg-health-green text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-health-accent transition">Save Changes</button>
      </div>
    </div>
  );
};

export default Profile;