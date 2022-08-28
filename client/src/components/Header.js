import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import "./styles/header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const isLogin = props.isLogin;

  const onLogOut = () => {
    sessionStorage.removeItem("email");
    window.location = '/';
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="header">
        <div className="header-container">
          <Link to="/" className="header-logo" onClick={closeMobileMenu}>
            <strong style={{color: 'red'}}>Inno</strong><strong style={{color: 'blue'}}> Blue☁</strong>
            <i className="fab fa-typo3" />
          </Link>
          <ul className={click ? "header-menu active" : "header-menu"}>
            <li className="header-item">
              <Link to="/mint" className="header-links" onClick={closeMobileMenu}>
                NFT mint
              </Link>
            </li>
            <li className="header-item">
              <Link
                to="../MainPage"
                className="header-links"
                onClick={handleClick}
              >
                NFT maket
              </Link>
            </li>
            <li className="header-item">
              <Link
                to="/mypage"
                className="header-links"
                onClick={closeMobileMenu}
              >
                My page
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="header-links"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {isLogin? <button onClick={onLogOut}>Logout </button> : <Link to ="/login">LOG IN</ Link>}
        </div>
      </nav>
    </>
  );
}

export default Header;
