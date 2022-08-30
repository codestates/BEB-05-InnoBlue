import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import "./styles/header.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Header(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const isLogin = props.isLogin;

  const handleClick = () => {
    if(!isLogin) {
      alert('로그인을 먼저 하세요')
    } else {
      setClick(!click);
    }
  }
  const closeMobileMenu = () => setClick(false);


  
  const onLogOut = () => {
    sessionStorage.removeItem("email");
    window.location = "/";
  };

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
            <strong style={{ color: "" }}>Inno</strong>
            <strong style={{ color: "" }}> Blue☁</strong>
            <i className="fab fa-typo3" />
          </Link>
          <ul className={click ? "header-menu active" : "header-menu"}>
            <li className="header-item">
              {isLogin? (
                <Link
                  to="/mint"
                  className="header-links"
                  onClick={closeMobileMenu}
                >
                  NFT mint
                </Link>
              ) : (
                <Link
                to="/login"
                className="header-links"
                onClick={handleClick}
                >
                NFT mint
                </Link>
              )}
            </li>
            <li className="header-item">
            {isLogin? (
              <Link
                to="../market"
                className="header-links"
                onClick={handleClick}
              >
                NFT market
              </Link>
            ) : (
              <Link
              to="/login"
              className="header-links"
              onClick={handleClick}
              >
              NFT market
              </Link>
            )}
            </li>
            <li className="header-item">
              {isLogin? (
                <Link
                  to="/mypage"
                  className="header-links"
                  onClick={closeMobileMenu}
                >
                My page
                </Link>
              ) : (
                <Link
                to="/login"
                className="header-links"
                onClick={handleClick}
                >
                My page
                </Link>
              )}
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

          {isLogin ? (
            <Button variant="light" onClick={onLogOut}>
              LOGOUT{" "}
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="light" className="p-2">
                Log in
              </Button>{" "}
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
