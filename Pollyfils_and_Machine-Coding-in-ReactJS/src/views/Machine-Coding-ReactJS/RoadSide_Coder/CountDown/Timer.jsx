import React, { useState } from "react";
import "./index.css";
import ButtonController from "./ButtonController";
import { useRef } from "react";
const Timer = () => {
  const [hours, setHours] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const intervalRef = useRef();
  const [isRunning, setIsRunning] = useState(false);
  const alarmSound = new Audio("/audio.wav");

  const totalSeconds = () => {
    const h = parseInt(hours || "0");
    const m = parseInt(min || "0");
    const s = parseInt(sec || "0");
    return h * 3600 + m * 60 + s;
  };

  const updatefromSeconds = (total) => {
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;

    setHours(String(h).padStart(2, "0"));
    setMin(String(m).padStart(2, "0"));
    setSec(String(s).padStart(2, "0"));
  };

  const handleStartTimer = () => {
    if (totalSeconds() <= 0 || intervalRef.current) return;
    let total = totalSeconds();
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      total -= 1;
      updatefromSeconds(total);

      if (total <= 0) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        alarmSound.play().catch((err) => console.error(err));
      }
    }, 1000);
  };

  const handlePauseTimer = () => {
    if (intervalRef.current) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleResetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setHours("");
    setMin("");
    setSec("");
    setIsRunning(false);
  };

  return (
    <>
      <div className="countdown-container">
        <div className="item-container">
          <div className=" timer-display-style">
            <span className="timer-heading">Hours</span>
            <input
              type="text"
              placeholder={"00"}
              autoFocus
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 2);
                setHours(val);
              }}
              value={hours}
            />
          </div>
          <p className="timer-display-colon">:</p>
        </div>
        <div className="item-container">
          <div className=" timer-display-style">
            <span className="timer-heading">Minutes</span>
            <input
              type="text"
              placeholder="00"
              value={min}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 2);
                setMin(val);
              }}
            />
          </div>
          <p className="timer-display-colon">:</p>
        </div>
        <div className="item-container">
          <div className="timer-display-style">
            <span className="timer-heading">Seconds</span>
            <input
              type="text"
              placeholder="00"
              value={sec}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 2);
                setSec(val);
              }}
            />
          </div>
        </div>
      </div>
      <ButtonController
        handleStartTimer={handleStartTimer}
        handlePauseTimer={handlePauseTimer}
        handleResetTimer={handleResetTimer}
        isRunning={isRunning}
      />
    </>
  );
};

export default Timer;
