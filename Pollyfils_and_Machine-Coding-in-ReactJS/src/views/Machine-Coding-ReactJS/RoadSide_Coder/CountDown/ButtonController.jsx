import React from "react";
import "./index.css";
const ButtonController = ({
  handleStartTimer,
  handlePauseTimer,
  handleResetTimer,
  isRunning,
}) => {
  return (
    <div className="button-container">
      {isRunning ? (
        <button className="orange" onClick={handlePauseTimer}>
          Pause
        </button>
      ) : (
        <button className="green" onClick={handleStartTimer}>
          Start
        </button>
      )}

      <button className="red" onClick={handleResetTimer}>
        Reset
      </button>
    </div>
  );
};

export default ButtonController;
