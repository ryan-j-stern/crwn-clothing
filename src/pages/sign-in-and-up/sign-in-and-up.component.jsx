import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

import "./sign-in-and-up.styles.scss";

const SignInAndUp = () => (
  <div className="sign-in-and-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndUp;
