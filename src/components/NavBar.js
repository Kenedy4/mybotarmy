import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Bot Collection</Link>
        </li>
        <li>
          <Link to="/your-bot-army">Your Bot Army</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
