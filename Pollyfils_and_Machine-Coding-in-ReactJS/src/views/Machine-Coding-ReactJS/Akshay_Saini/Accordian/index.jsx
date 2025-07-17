import { useState } from "react";
import "./index.css";
import { ChevronDown, ChevronUp } from "lucide-react";
const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript.",
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React.",
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js.",
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js.",
  },
];

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggleItem = (index) => {
    setOpenIndex(openIndex == index ? null : index);
  };
  return !items || items.length === 0 ? (
    "No Items Available"
  ) : (
    <div className="main-container">
      <div className="item-container">
        {items.map((item, index) => (
          <div className="item-style" key={index}>
            <div className="item-title" onClick={() => handleToggleItem(index)}>
              {item.title}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && (
              <div className="item-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
