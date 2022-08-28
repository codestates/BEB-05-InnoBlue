import React, { useEffect, useState } from 'react';
import "./styles/header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  const isLogin = props.isLogin;

  const onLogOut = () => {
    sessionStorage.removeItem("email");
    document.location.href = '/'
  }

  return (
    <header>
      <nav className="Navbar-Link">
        <Link to="DetailPage">Market</Link>
        <Link to="NFTmintPage">NFTmint</Link>
        <Link to="WritePage">Board</Link>

        <Link to="/" className="Header-Logo">
          🧿Blue Light
        </Link>

        <input
          type="text"
          size="30"
          placeholder="Find the color you want"
          className="Search-Input"
        />

        <Link to="/">Mypage</Link>
        <Link to="/signup">Sign Up</Link>
        {isLogin? <button onClick={onLogOut}>Logout </button> : <Link to="Login">login</Link>}
      </nav>
    </header>
  );
}

