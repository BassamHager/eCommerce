import React from "react";
import "./SignIn.scss";
import Button from "./forms/Button";

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="wrap">
        <h2>Login</h2>
      </div>

      <div className="formWrap">
        <form>
          <div className="socialSignIn">
            <div className="row">
              <Button>Sign in with Google</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
