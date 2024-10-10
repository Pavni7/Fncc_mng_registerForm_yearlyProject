import React from "react";
import "./Footers.css";

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <h3>FINANCE MANAGEMENT</h3>
        <p>One Platform - Endless Possibilities</p>
        <p>Take control of your finances today. With our innovative management tools. Simplify your financial life, and achieve your goals.</p>
      </div>
      <div className="footer-links">
        <h3>USEFUL LINKS</h3>
        <ul>
        <li><button onClick={() => alert('About us clicked')}>About Us</button></li>
        <li><button onClick={() => alert('Contact clicked')}>Contact</button></li>
        <li><button onClick={() => alert('Privacy policy clicked')}>Privacy Policy</button></li>
      </ul>
      </div>
      <div className="footer-contact">
        <h3>CONTACT US</h3>
        <p>Email Support: support@khub.com</p>
        <div className="social-icons">
          <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="youtube-icon.png" alt="YouTube" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
