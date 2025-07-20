import React from "react";

const Interest = ({ data, setData, errors }) => {
  const handleChange = (interest) => {
    const isInterested = data.selectedInterest.includes(interest);
    const updateInterest = isInterested
      ? data.selectedInterest.filter((i) => i !== interest)
      : [...data.selectedInterest, interest];
    setData((pre) => ({ ...pre, selectedInterest: updateInterest }));
  };

  return (
    <div className="main-interest-container">
      {errors.selectedInterest && (
        <span className="error">{errors.selectedInterest}</span>
      )}
      <div className="interest-container">
        {data.interest.map((d, index) => (
          <div key={index} className="interest-list">
            <input
              className="interest-checkbox"
              type="checkbox"
              value={d}
              name="interest"
              checked={data.selectedInterest.includes(d)}
              onChange={() => handleChange(d)}
            />
            <span>{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
