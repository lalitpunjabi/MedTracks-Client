import React from 'react';

const SocialShare = ({ streak }) => {
  const shareText = `I'm on a ${streak}-day medicine adherence streak with MedTrack! #MedTrack`;

  return (
    <div className="flex space-x-2">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Share on Twitter
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Share on WhatsApp
      </a>
    </div>
  );
};

export default SocialShare; 