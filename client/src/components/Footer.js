import "./styles/footer.css";
import React from "react";
import "./styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-5 footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Thank You For Your Interest In Our Project
        </p>
        <p className="footer-subscription-text">
          If you are curious about Inno blue
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">            
              <h2>Team 2</h2>
            <Link to="">Doyeong Kim </Link>
            <Link to="">Donghyun LEE </Link>
            <Link to="">Hyein LEE </Link>
            <Link to="">Hyojeong LEE</Link>
          </div>        
      
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Inno Blue☁
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">codestates © 2022</small>
         </div>
      </section>
    </div>
  );
}
export default Footer;