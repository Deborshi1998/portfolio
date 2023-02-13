import React from "react";
import { PacmanLoader } from "react-spinners";
import "../styles/LoadingIntro.css";
function Intro() {
  return (
    <div className="intro_body">
      <div className="intro_text">
        <h1>Hello World</h1>
      </div>
      <div className="loading">
        <PacmanLoader color="#fff" />
      </div>
    </div>
  );
}

export default Intro;
