import React, { useMemo, useState } from "react";

const UseCustomMemo = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(100);
  const handleIncrementCount = () => {
    setCount(count + 1);
  };
  const squareValue = () => {
    console.log("Expensive Calc");
    return count * count;
  };
  const handleDecrementCount = () => {
    setCount1(count1 - 1);
  };
  const memoizedsquareValue = useMemo(squareValue, [count]);
  return (
    <>
      <h1>{count}</h1>
      <h1>{memoizedsquareValue}</h1>
      <button onClick={handleIncrementCount}>Increment</button>
      <h1>{count1}</h1>
      <button onClick={handleDecrementCount}>Decrement</button>
    </>
  );
};

export default UseCustomMemo;
