import "./index.css";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
const getColorValue = (loaderValue) => {
  if (loaderValue >= 0 && loaderValue <= 30) return "red";
  else if (loaderValue > 30 && loaderValue <= 70) return "orange";
  else return "green";
};
const ProgressBar = () => {
  const [loaderValue, setLoaderValue] = useState(0);
  const [colorBg, setColorBg] = useState("");
  const bar = [5, 10, 25, 45, 60, 90, 100];
  const decrementCount = () => {
    setLoaderValue((prev) => Math.max(prev - 10, 0));
  };
  const incrementcount = () => {
    if (loaderValue === 100) return;
    setLoaderValue((prev) => Math.min(prev + 10, 100));
  };
  useEffect(() => {
    setColorBg(getColorValue(loaderValue));
  }, [loaderValue]);
  return (
    <div className="container">
      <div className="main-container">
        <h1>Progress Bar</h1>
        <Loader colorBg={colorBg} loaderValue={loaderValue} />
        <div className="button-container">
          <button onClick={decrementCount}>-10%</button>
          <button onClick={incrementcount}>+10%</button>
        </div>
      </div>
      <div className="bar-container">
        {bar.map((b) => (
          <Loader loaderValue={b} colorBg={getColorValue(b)} />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
