import React, { useEffect, useRef, useState } from "react";
import "./index.css";
const OtpInputBox = () => {
  const OTP_Input_Size = 5;
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
    if (newVal) {
      const emptyIndex = newArr.findIndex((val, i) => val === "" && i > index);
      if (emptyIndex !== -1) {
        refArr.current[emptyIndex]?.focus();
      } else {
        refArr.current[OTP_Input_Size - 1]?.focus();
      }
    }
  };

  //handle keys like Backspace,arrow left and right
  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace")
      refArr.current[index - 1]?.focus();
    if (e.key === "ArrowLeft") refArr.current[index - 1]?.focus();
    if (e.key === "ArrowRight") refArr.current[index + 1]?.focus();
  };

  //   Handle pasting an OTP from clipboard
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteText = e.clipboardData.getData("text").trim().replace(/\D/g, "");
    if (!pasteText) return;
    const digits = pasteText.slice(0, OTP_Input_Size).split("");
    const newOTP = [...otpInputArray];
    digits.forEach((digit, i) => {
      newOTP[i] = digit;
      if (refArr.current[i]) {
        refArr.current[i].value = digit;
      }
    });
    setOtpInputArray(newOTP);
    const firstEmptyIndex = newOTP.findIndex((val) => val === "");
    if (firstEmptyIndex !== -1) refArr.current[firstEmptyIndex].focus();
    else refArr.current[OTP_Input_Size - 1].focus();
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
            onPaste={(e) => handlePaste(e)}
          />
        );
      })}
    </>
  );
};

export default OtpInputBox;
