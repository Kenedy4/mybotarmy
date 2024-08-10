import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <BotCard bot={bot} onDischarge={() => dischargeBot(bot.id)} />
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
