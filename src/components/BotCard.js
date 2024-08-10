import React from "react";

function BotCard({ bot, onEnlist, onDischarge }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {onEnlist && <button onClick={() => onEnlist(bot)}>Enlist</button>}
      {onDischarge && <button onClick={onDischarge}>X</button>}
    </div>
  );
}

export default BotCard;
