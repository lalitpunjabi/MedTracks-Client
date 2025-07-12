import React, { useRef, useState } from 'react';
import Tesseract from 'tesseract.js';

const MedicationScanner = () => {
  const [text, setText] = useState('');
  const fileInput = useRef();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const { data: { text } } = await Tesseract.recognize(file, 'eng');
    setText(text);
  };

  return (
    <div className="scanner-container">
      <input type="file" accept="image/*" ref={fileInput} onChange={handleImageUpload} />
      <div className="mt-4">
        <h3 className="font-bold">Extracted Text:</h3>
        <pre>{text}</pre>
      </div>
    </div>
  );
};

export default MedicationScanner; 