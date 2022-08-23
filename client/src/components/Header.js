import "./styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
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

        <Link to="Mypage">Mypage</Link>
        <Link to="signUpPage">Sing Up</Link>
        <Link to="Login">login</Link>
        <Link to="Logout">logout</Link>
      </nav>
    </header>
  );
}