import { useState, useEffect } from 'react';
import { MicrophoneIcon } from '@heroicons/react/24/solid';

function VoiceAssistant({ onResult }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      onResult(result);
      setIsListening(false);
    };

    recognition.onend = () => setIsListening(false);

    if (isListening) {
      recognition.start();
    }

    return () => recognition.stop();
  }, [isListening, onResult]);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setIsListening(!isListening)}
        className={`p-2 rounded-full ${isListening ? 'bg-red-600' : 'bg-blue-600'} text-white`}
      >
        <MicrophoneIcon className="w-6 h-6" />
      </button>
      {transcript && <p className="text-gray-600 dark:text-gray-300">Heard: {transcript}</p>}
    </div>
  );
}

export default VoiceAssistant;