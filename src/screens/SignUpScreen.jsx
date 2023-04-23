import React from "react";
import MyForm from "../components/common/MyForm";

const SignUpScreen = () => {
  return (
    <div className="row">
      <div className="col-11 col-xl-4 col-lg-5 col-md-6 col-sm-7 mx-auto">
        <h1 className="text-center my-5">Sign Up to Hodia</h1>
        <MyForm />
      </div>
    </div>
  );
};

export default SignUpScreen;
