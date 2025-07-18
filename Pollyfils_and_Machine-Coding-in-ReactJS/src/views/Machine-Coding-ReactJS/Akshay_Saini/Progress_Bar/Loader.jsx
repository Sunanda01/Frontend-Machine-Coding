import React, { useEffect, useState } from "react";
import "./index.css";

const Loader = ({ colorBg, loaderValue }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(loaderValue);
    }, 100);
    return () => clearTimeout(timer);
  }, [loaderValue]);
  return (
    <div
      className="outer"
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={loaderValue}
    >
      <div
        className={`inner ${colorBg}`}
        style={{
          width: `${displayValue}%`,
        }}
      ></div>
      <span>{displayValue}%</span>
    </div>
  );
};

export default Loader;
