import React from "react";
import SignUpForm from "../components/SignUpForm";

const SignUpScreen = () => {
  return (
    <div className="row">
      <div className="col-11 col-xl-4 col-lg-5 col-md-6 col-sm-7 mx-auto">
        <h1 className="text-center my-5">Sign Up to Hodia</h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpScreen;
