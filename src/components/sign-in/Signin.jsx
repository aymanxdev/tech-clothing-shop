import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../form-button/CustomButton";
import "./Signin.styles.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log("error occured signing in", err.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            required
            handleChange={this.handleChange}
            label="Passowrd"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
              type="button"
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
