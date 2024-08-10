import React, { useState } from "react";
import Bot from "./Bot";

function YourBotArmy() {
  const [army, setArmy] = useState([]);

  const handleRemoveBot = (botId) => {
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  const handleDischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, { method: "DELETE" }).then(
      () => handleRemoveBot(botId)
    );
  };

  return (
    <div className="your-bot-army">
      {army.map((bot) => (
        <div key={bot.id}>
          <Bot bot={bot} />
          <button onClick={() => handleRemoveBot(bot.id)}>Remove</button>
          <button onClick={() => handleDischargeBot(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
