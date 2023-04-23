import React from "react";

const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Input;
