import React from "react";
import "../index.css";
const Profile = ({ data, setData, errors }) => {
  const handleChange = (e, item) => {
    setData((prev) => ({ ...prev, [item]: e.target.value }));
  };
  return (
    <div className="profile-container">
      <div className="input-container">
        <label>Name:</label>
        <input
          placeholder="Enter Name"
          type="text"
          value={data.name}
          name="name"
          onChange={(e) => handleChange(e, "name")}
          autoFocus
        />
      </div>
      {errors.name && <span className="error">{errors.name}</span>}
      <div className="input-container">
        <label>Age:</label>
        <input
          placeholder="Enter Age"
          type="number"
          value={data.age}
          onChange={(e) => handleChange(e, "age")}
        />
      </div>
      {errors.age && <span className="error">{errors.age}</span>}
      <div className="input-container">
        <label>Email:</label>
        <input
          placeholder="Enter Email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
      {errors.email && <span className="error">{errors.email}</span>}
    </div>
  );
};

export default Profile;
