import React from "react";

const Input = ({ label, name, value, error, onChange, type = "text" }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Input;
