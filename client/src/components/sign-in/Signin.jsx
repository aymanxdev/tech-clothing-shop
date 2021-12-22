import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../form-button/CustomButton";
import "./Signin.styles.scss";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";
import { connect } from "react-redux";

const Signin = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          type="email"
          required
          handleChange={handleChange}
          label="Email"
        />

        <FormInput
          name="password"
          value={password}
          type="password"
          required
          handleChange={handleChange}
          label="Passowrd"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            isGoogleSignIn
            type="button"
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Signin);
