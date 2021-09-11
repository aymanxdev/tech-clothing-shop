import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../form-button/CustomButton";
import "./Signin.styles.scss";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
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
          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}
