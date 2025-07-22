import React, { useState } from "react";
import "./index.css";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Interest from "./components/Interest";

const TabForm = () => {
  const [errors, setErrors] = useState({});
  const [activeComponent, setactiveComponent] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interest: [
      "coding",
      "cooking",
      "reading",
      "traveling",
      "photography",
      "drawing",
      "gaming",
      "writing",
      "gardening",
      "baking",
      "dancing",
      "yoga",
      "hiking",
      "painting",
      "music",
      "cycling",
      "blogging",
      "DIY crafts",
      "learning languages",
      "playing instruments",
    ],
    selectedInterest: [],
    theme: "light",
  });
  const ComponentList = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const err = {};
        if (!data.name || data.name.trim().length < 3)
          err.name = "Name Not Valid";
        if (!data.age || isNaN(data.age) || data.age < 15)
          err.age = "Age Not Valid";
        if (!data.email || !emailRegex.test(data.email))
          err.email = "Email Not Valid";
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (!data.selectedInterest || data.selectedInterest.length < 1)
          err.selectedInterest = "Select atleast one";
        setErrors(err);
        return err.selectedInterest ? false : true;
      },
    },
    {
      name: "Setting",
      component: Setting,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComponent = ComponentList[activeComponent].component;
  return (
    <div className="main-container">
      <div className="component">
        {ComponentList.map((comp, index) => (
          <div
            key={index}
            className={`component-btn ${
              index === activeComponent ? "component-focus" : ""
            }`}
            onClick={() => {
              if (index === activeComponent) return;
              const isValid = ComponentList[activeComponent]?.validate?.();
              if (isValid) setactiveComponent(index);
            }}
          >
            {comp.name}
          </div>
        ))}
      </div>
      <div className="component-container">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            if (ComponentList[activeComponent]?.validate?.()) {
              setactiveComponent((pre) => Math.max(pre - 1, 0));
            }
          }}
          disabled={activeComponent === 0}
        >
          Back
        </button>
        <button
          className="btn"
          onClick={() => {
            if (ComponentList[activeComponent]?.validate?.()) {
              // console.log(ComponentList[activeComponent]?.validate?.());
              setactiveComponent((pre) =>
                Math.min(pre + 1, ComponentList.length - 1)
              );
            }
          }}
          disabled={activeComponent === ComponentList.length - 1}
        >
          Next
        </button>
        {activeComponent === ComponentList.length - 1 && (
          <button
            className="btn"
            onClick={() => {
              if (ComponentList[activeComponent]?.validate?.()) {
                console.log(data);
              }
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
