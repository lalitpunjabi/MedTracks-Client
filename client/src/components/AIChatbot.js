import React, { useState } from 'react';
import { PaperAirplaneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const mockResponse = (msg) => {
  if (msg.toLowerCase().includes('aspirin')) return 'Aspirin is used to reduce pain, fever, or inflammation.';
  if (msg.toLowerCase().includes('missed')) return 'If you missed a dose, take it as soon as you remember.';
  return 'I am your AI health assistant. How can I help you today?';
};

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am your AI health assistant. Ask me anything about your medicines.' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: 'bot', text: mockResponse(input) }]);
    }, 700);
    setInput('');
  };

  return (
    <>
      <button
        className="fixed bottom-8 right-8 z-50 bg-health-blue text-white p-4 rounded-full shadow-lg hover:bg-health-green transition"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI Chatbot"
      >
        <ChatBubbleLeftRightIcon className="w-7 h-7" />
      </button>
      {open && (
        <div className="fixed bottom-24 right-8 z-50 w-80 max-w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-health-blue text-white p-4 font-bold">AI Health Assistant</div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto h-64">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-lg max-w-xs ${m.from === 'user' ? 'bg-health-green text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center p-2 border-t dark:border-gray-700">
            <input
              className="flex-1 p-2 rounded border dark:bg-gray-800 dark:text-white"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask a health question..."
            />
            <button onClick={sendMessage} className="ml-2 p-2 bg-health-green rounded-full text-white hover:bg-health-accent transition">
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot; 