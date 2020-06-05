import React from "react";
import "./SignIn.scss";
import Button from "./forms/Button";
import { signInWithGoogle } from "../firebase/utils";

const SignIn = () => {
  const submit = async (e) => {
    e.preventDefault();
    console.log("hi");
  };

  return (
    <div className="signIn">
      <div className="wrap">
        <h2>Login</h2>
      </div>

      <div className="formWrap">
        <form onSubmit={submit}>
          <div className="socialSignIn">
            <div className="row">
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
