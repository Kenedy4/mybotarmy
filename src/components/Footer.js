import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div>
        <h3>Physical Address</h3>
        <p>123 Galactic Ave, Universe</p>
      </div>
      <div>
        <h3>Social Media</h3>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;
