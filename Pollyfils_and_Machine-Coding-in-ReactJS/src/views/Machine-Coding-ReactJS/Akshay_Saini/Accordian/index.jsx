import { useState } from "react";
import "./index.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const Accordian = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggleItem = (index) => {
    setOpenIndex(openIndex == index ? null : index);
  };
  return !items || items.length === 0 ? (
    "No Items Available"
  ) : (
    <div className="main-container">
      <div className="item-container">
        <h1 style={{textAlign:"center"}}>Accordian Machine Coding</h1>
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
