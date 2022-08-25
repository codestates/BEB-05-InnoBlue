import "./styles/footer.css";
import React from "react";
import "./styles/footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Thank You For Your Interest In Our Project
        </p>
        <p className="footer-subscription-text">
          If you are curious about Inno blue
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder=""
            />
            <Button buttonStyle="btn--outline">Search</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Doyeong Kim</Link>
            <Link to="/">Donghyun LEE</Link>
            <Link to="/">Hyein LEE</Link>
            <Link to="/">Hyojeong LEE</Link>
          </div>
          <div class="footer-link-items">
            <h2>Team</h2>
            <Link to="/">Leader</Link>
            <Link to="/">members</Link>
            <Link to="/">members</Link>
            <Link to="/">members</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Position</h2>
            <Link to="/">Back-End</Link>
            <Link to="/">Back-End</Link>
            <Link to="/">Front-End</Link>
            <Link to="/">Front-End</Link>
          </div>
          <div class="footer-link-items">
            <h2>github</h2>
            <Link to="https://github.com/bcdy19">bcdy19</Link>
            <Link to="https://github.com/dhjefflee">dhkefflee</Link>
            <Link to="https://github.com/hyenne">hyenne</Link>
            <Link to="https://github.com/rootrue">rootrue</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Inno Blue☁
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">codestates © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;