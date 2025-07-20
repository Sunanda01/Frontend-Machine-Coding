import React from "react";

const Setting = ({ data, setData }) => {
  const { theme } = data;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div className="input-container">
        <input
          type="radio"
          name="Dark"
          checked={theme === "dark"}
          onChange={() => setData((prev) => ({ ...prev, theme: "dark" }))}
        />
        Dark
      </div>
      <div className="input-container">
        <input
          type="radio"
          name="Light"
          checked={theme === "light"}
          onChange={() => setData((prev) => ({ ...prev, theme: "light" }))}
        />
        Light
      </div>
    </div>
  );
};

export default Setting;
