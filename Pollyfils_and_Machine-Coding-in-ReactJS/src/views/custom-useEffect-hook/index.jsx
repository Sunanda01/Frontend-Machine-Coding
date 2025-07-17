import React, { useState } from "react";
import useCustomEffect from "./useCustomEffect";

const UseCustomEffect = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const handleIncrementCount = () => {
    setCount(count + 1);
  };
  const handleDecrementCount = () => {
    setCount(count - 1);
  };
  useCustomEffect(() => {
    console.log("Retriggered UseEffect");
    return () => {
      console.log("cleanup");
    };
  }, [count]);
  // console.log("Rerendered")

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrementCount}>Increment</button>
      <button onClick={handleDecrementCount}>Decrement</button>
    </>
  );
};

export default UseCustomEffect;
