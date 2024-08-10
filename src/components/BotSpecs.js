import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BotSpecs() {
  const [bot, setBot] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8001/bots/${id}`)
      .then(response => response.json())
      .then(data => setBot(data));
  }, [id]);

  const handleEnlistBot = () => {
    // Logic to add bot to YourBotArmy
  };

  return bot ? (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleEnlistBot}>Enlist</button>
      <button onClick={() => navigate('/')}>Back to List</button>
    </div>
  ) : <p>Loading...</p>;
}

export default BotSpecs;
