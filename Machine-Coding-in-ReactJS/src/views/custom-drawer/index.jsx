import React, { useState } from "react";
import Drawer from "./Drawer";
import "./Drawer.css";
import { X } from "lucide-react";

const CustomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <button onClick={toggleDrawer}>
          {isOpen === true ? "Close Drawer" : "Open Drawer"}
        </button>
      </div>
      <Drawer isOpen={isOpen} onClose={toggleDrawer}>
        <div className="drawer-content">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 className="drawer-heading">Drawer Content</h1>
            <X
              onClick={toggleDrawer}
              style={{
                height: "6%",
                width: "6%",
                color: "red",
                cursor: "pointer",
                boxShadow: "0  2px 5px red",
              }}
            />
          </div>

          <p style={{ color: "black" }}>
            This is the drawer content that slides in from the right.
          </p>
          <button
            onClick={toggleDrawer}
            style={{ backgroundColor: "blue", fontWeight: "bold" }}
          >
            Close
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
