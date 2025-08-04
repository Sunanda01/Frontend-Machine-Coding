import "./index.css";
import React from "react";
import Timer from "./Timer";

const CountDown = () => {
  return (
    <div className="main-container">
      <span style={{ fontSize: "3rem" }}>CountDown Timer</span>
      <Timer />
    </div>
  );
};

export default CountDown;
