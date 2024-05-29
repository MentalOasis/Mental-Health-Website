
import React, { useState } from 'react';
import './emoji.css';  // Asegúrate de crear este archivo CSS y añadir los estilos necesarios

const EmojiRating = () => {
  const [message, setMessage] = useState('Haz clic en un emoji para ver un mensaje');

  const handleEmojiClick = (emojiMessage) => {
    setMessage(emojiMessage);
  };

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center mt-2">
        <img 
          src="https://img.icons8.com/emoji/48/000000/angry-face-emoji--v2.png" 
          alt="Angry" 
          onClick={() => handleEmojiClick('Te sientes enojado')}
          className="emoji"
        />
        <img 
          src="https://img.icons8.com/fluent/48/000000/sad.png" 
          alt="Sad" 
          onClick={() => handleEmojiClick('Te sientes triste')}
          className="emoji"
        />
        <img 
          src="https://img.icons8.com/color/48/000000/happy.png" 
          alt="Happy" 
          onClick={() => handleEmojiClick('Te sientes feliz')}
          className="emoji"
        />
        <img 
          src="https://img.icons8.com/emoji/48/000000/smiling-face.png" 
          alt="Smiling" 
          onClick={() => handleEmojiClick('Te sientes sonriente')}
          className="emoji"
        />
        <img 
          src="https://img.icons8.com/color/48/000000/lol.png" 
          alt="LOL" 
          onClick={() => handleEmojiClick('Te sientes divertido')}
          className="emoji"
        />
      </div>
      {message && <div className="text-center mt-3">{message}</div>}
    </div>
  );
};

export default EmojiRating;

