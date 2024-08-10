import React, { useState, useEffect } from 'react';
import Bot from './Bot';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const handleAddBot = (bot) => {
    // Logic to add bot to YourBotArmy
  };

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <Bot key={bot.id} bot={bot} onClick={handleAddBot} />
      ))}
    </div>
  );
}

export default BotCollection;
