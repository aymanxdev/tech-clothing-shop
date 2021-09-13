import React, { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import CustomButton from "../form-button/CustomButton";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match, please check again");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log("an error occured registering a user", err.message);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-up">
        <h1 className="title">
          Register an account on the fly to start shopping
        </h1>
        <span> If you already have an account, please sign in</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={this.state.displayName}
            type="text"
            label="Username"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            value={this.state.confirmPassword}
            type="password"
            label="Confirm Password"
            required
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}
