import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../form-button/CustomButton";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/userActions";

const Signup = ({ EmailsignUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match, please check again");
      return;
    }
    EmailsignUpStart({ displayName, email, password });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h1 className="title">
        Register an account on the fly to start shopping
      </h1>
      <span> If you already have an account, please sign in</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          value={displayName}
          type="text"
          label="Username"
          required
          handleChange={handleChange}
        />
        <FormInput
          name="email"
          value={email}
          type="email"
          label="Email"
          required
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          value={password}
          type="password"
          label="Password"
          required
          handleChange={handleChange}
        />
        <FormInput
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          label="Confirm Password"
          required
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  EmailsignUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(Signup);
