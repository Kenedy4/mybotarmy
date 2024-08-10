import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <div>
      <header className="header">
        <h1>Army Bot Collection</h1>
        <p>Home of all types of bots</p>
        <NavBar />
      </header>
    </div>
  );
}

export default Header;
