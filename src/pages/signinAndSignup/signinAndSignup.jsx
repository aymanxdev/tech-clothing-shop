import React from "react";
import Signin from "../../components/sign-in/Signin";
import Signup from "../../components/sign-up/Signup";
import "./signinAndSignup.styles.scss";

const signinAndSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default signinAndSignup;
