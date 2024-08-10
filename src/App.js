import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<BotCollection />} />
        <Route path="/your-bot-army" element={<YourBotArmy />} />
        <Route path="/bot/:id" element={<BotSpecs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
