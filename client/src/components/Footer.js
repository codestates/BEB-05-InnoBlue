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
            <h2>About Us</h2>
            <Link to="/">Kim</Link>
            <Link to="/">LEE</Link>
            <Link to="/">Doyeong Kim</Link>
            <Link to="/">Donghyun LEE</Link>
            <Link to="/">Hyein LEE</Link>
            <Link to="/">Hyojeong LEE</Link>
          </div>
          <div className="footer-link-items">
            <h2>Team</h2>
            <Link to="/">Leader</Link>
            <Link to="/">members</Link>
            <Link to="/">members</Link>
            <Link to="/">members</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Position</h2>
            <Link to="/">Back-End</Link>
            <Link to="/">Back-End</Link>
            <Link to="/">Front-End</Link>
            <Link to="/">Front-End</Link>
          </div>
          <div className="footer-link-items">
            <h2>github</h2>
            <Link to="https://github.com/bcdy19">bcdy19</Link>
            <Link to="https://github.com/dhjefflee">dhkefflee</Link>
            <Link to="https://github.com/hyenne">hyenne</Link>
            <Link to="https://github.com/rootrue">rootrue</Link>
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
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;