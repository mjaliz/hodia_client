import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class SignUpForm extends Form {
  state = {
    data: { name: "", email: "", password: "", confirmPassword: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().alphanum().min(3).max(250).required().label("Name"),
    email: Joi.string().email({ minDomainSegments: 3 }).label("Email address"),
    password: Joi.string().min(8).max(250).required().label("Password"),
    confirmPassword: Joi.string()
      .min(8)
      .max(250)
      .required()
      .label("Confirm password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="bg-white p-4 rounded-4">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Name", "name")}
          {this.renderInput("Email address", "email", "email")}
          {this.renderInput("Password", "password", "password")}
          {this.renderInput("Confirm password", "confirmPassword", "password")}
          {this.renderButton("Sign Up")}
        </form>
      </div>
    );
  }
}

export default SignUpForm;
