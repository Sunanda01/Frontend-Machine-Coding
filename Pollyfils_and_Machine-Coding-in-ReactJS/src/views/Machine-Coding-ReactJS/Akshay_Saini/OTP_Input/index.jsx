import React, { useEffect, useRef, useState } from "react";
import "./index.css";
const OtpInputBox = () => {
  const OTP_Input_Size = 6;
  const [otpInputArray, setOtpInputArray] = useState(
    new Array(OTP_Input_Size).fill("")
  );
  const refArr = useRef([]);
  const hasTriggered = useRef(false);
  const handleOnChange = (inputValue, index) => {
    if (isNaN(inputValue)) return;
    const newVal = inputValue.trim();
    const newArr = [...otpInputArray];
    newArr[index] = newVal.slice(-1);
    setOtpInputArray(newArr);
    newVal && refArr.current[index + 1]?.focus();
  };
  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };
  const handleCompleteOTP = (otp) => {
    console.log(otp);
  };
  
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  useEffect(() => {
    const isComplete = otpInputArray.every((digit) => digit != "");
    if (isComplete && !hasTriggered.current) {
      hasTriggered.current = true;
      handleCompleteOTP(otpInputArray.join(""));
    } else if (!isComplete) {
      hasTriggered.current = false;
    }
  }, [otpInputArray]);
  return (
    <>
      <h1>Enter OTP</h1>
      {otpInputArray.map((num, index) => {
        return (
          <input
            type="text"
            key={index}
            value={otpInputArray[index]}
            className="otp-input"
            onChange={(e) => handleOnChange(e.target.value, index)}
            ref={(input) => (refArr.current[index] = input)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </>
  );
};

export default OtpInputBox;
