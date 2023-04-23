import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./Input";

const MyForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const schema = {
    name: Joi.string().alphanum().min(3).max(250).required().label("Name"),
    email: Joi.string().email({ minDomainSegments: 3 }).label("Email address"),
    password: Joi.string().min(8).max(250).required().label("Password"),
    confirmPassword: Joi.string()
      .min(8)
      .max(250)
      .required()
      .label("Confirm password"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(values, schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const filedSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, filedSchema);
    return error ? error.details[0].message : null;
  };
  const handleChange = ({ currentTarget: input }) => {
    const error = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const newValues = { ...values };
    newValues[input.name] = input.value;
    setValues(newValues);
    setErrors(error);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
  };
  return (
    <div className="bg-white p-4 rounded-4">
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          label="Email address"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          error={errors.email}
        />
        <Input
          label="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          error={errors.password}
        />
        <Input
          label="Confirm password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          type="password"
          error={errors.confirmPassword}
        />
        <button
          disabled={validate()}
          type="submit"
          className="mt-3 btn btn-primary w-100"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default MyForm;
