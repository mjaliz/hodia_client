import React from "react";

const InputSelect = ({ label, options }) => {
  return (
    <div className="form-group">
      <label htmlFor="formSelect">{label}</label>
      <select className="form-control" id="formSelect">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
