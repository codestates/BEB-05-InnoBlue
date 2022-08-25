import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./styles/home.css";

function Home() {
  return (
    <div className="home-container">
      {/*이미지 추가할 경우 글씨 밀려남 현상 발생*/}
      {/* <img className="home-images" alt="img-home" src="/images/img-home.jpg" /> */}
      <h1>What's your color?</h1>
      <p>I wanna know</p>
      <div className="home-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SIGN UP
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          My talk <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Home;