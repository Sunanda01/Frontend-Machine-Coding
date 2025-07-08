import React from "react";
import "./Drawer.css";

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && <div className="drawer-overlay" onClick={onClose} />}
      <div className={`drawer-container ${isOpen ? "drawer-open" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default Drawer;
