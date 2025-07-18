import { useEffect, useState } from "react";
import "./index.css";

const ChipsInput = () => {
  const [loadingState, setloadingstate] = useState(false);
  const [input, setInput] = useState("");
  const [chipList, setChipList] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setChipList((prev) => [...prev, input]);
      setInput("");
    }
  };

  const handleDeleteChip = (index) => {
    const copyChipList = [...chipList];
    copyChipList.splice(index, 1);
    setChipList(copyChipList);
  };

  useEffect(() => {
    const getChipList = JSON.parse(localStorage.getItem("ChipList"));
    if (getChipList) setChipList(getChipList);
    setloadingstate(true);
  }, []);

    useEffect(() => {
    if (loadingState)
      localStorage.setItem("ChipList", JSON.stringify(chipList));
  }, [chipList, loadingState]);

  return (
    <div className="container">
      <div className="sub-container">
        <h1>Chips Input</h1>
        <input
          type="text"
          placeholder="Type a chip and press tag"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <div className="chip-container">
          {chipList &&
            chipList.map((chip, index) => (
              <div className="chip-list-container" key={index}>
                {chip}
                <button onClick={() => handleDeleteChip(index)}>X</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChipsInput;
