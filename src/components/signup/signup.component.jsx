import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserDocument } from "../../firebase/firebase.utils";

import "./signup.styles.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "password"
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "password"
      });
    } catch (error) {
      console.log("error", error.message);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signup">
        <h2 className="title">I do not have an account.</h2>
        <span>Sign up with your email and password.</span>

        <form className="signup-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            label="Display Name"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="email"
            value={email}
            name="email"
            label="Email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            value={password}
            name="password"
            label="Password"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            label="Confirm Password"
            required
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
