import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import NavBar from "./components/NavBar";

function App() {
  const [army, setArmy] = useState([]);
  const [error, setError] = useState(null);

  // Handle enlisting a bot
  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
      alert(
        "Your army has been successfully reinforced with deployment of one bot."
      );
    }
  };

  // Handle deleting (discharging) a bot
  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
      })
      .catch((error) => {
        console.error("Error discharging bot:", error);
        setError("Failed to discharge bot. Please try again later.");
      });
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<BotCollection enlistBot={enlistBot} />}
        />
        <Route
          path="/your-bot-army"
          element={<YourBotArmy army={army} dischargeBot={dischargeBot} />}
        />
      </Routes>
      {error && <div className="error">{error}</div>}
    </Router>
  );
}

export default App;
