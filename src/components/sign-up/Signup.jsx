import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../form-button/CustomButton";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/userActions";

class Signup extends Component {
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
    const { EmailsignUpStart } = this.props;
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match, please check again");
      return;
    }
    EmailsignUpStart({ displayName, email, password });
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

const mapDispatchToProps = (dispatch) => ({
  EmailsignUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(Signup);
